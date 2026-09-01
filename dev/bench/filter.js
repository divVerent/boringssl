((data, filterJSON) => {
  loadConfigFromString(filterJSON);
  const cpuFilter = CONFIG.cpuFilter;
  const nameFilter = CONFIG.nameFilter;

  allCPUFilters = {
    '': new Set()
  };

  function keepBench(subentry, bench) {
    const name = bench.name;
    if (!(!nameFilter || name.includes(nameFilter))) {
      return false;
    }
    const cpuType = cpuTypeOf(bench);
    if (!(cpuType in allCPUFilters)) {
      allCPUFilters[cpuType] = new Set();
    }
    allCPUFilters[cpuType].add(subentry.date);
    allCPUFilters[''].add(subentry.date);
    return !cpuFilter || cpuType == cpuFilter;
  }

  function cpuFilterEntries(entries) {
    for (const subentries of Object.values(entries)) {
      for (const subentry of subentries) {
        subentry.benches = subentry.benches.filter((bench) => keepBench(subentry, bench));
      }
    }
  }
  cpuFilterEntries(data.entries);

  let html = `
    <h2>Available CPU Types</h2>
    <div>
      <table>
        <tr>
          <th>CPU Type</th>
          <th>Count</th>
        </tr>
  `;
  for (const [cpuFilterStr, set] of Object.entries(allCPUFilters).toSorted(([aName, aSet], [bName, bSet]) => {
      if (aSet != bSet) {
        return bSet.size - aSet.size;
      }
      return aName.localeCompare(bName);
    })) {
    const filterJSON = configToString({'cpuFilter': cpuFilterStr.length ? cpuFilterStr : null});
    const url = `JavaScript:location.hash = '#${escape(cpuFilterJSON)}'; location.reload(); false;`;
    html += `
        <tr>
          <td><a href="${url}">${cpuFilterStr.length ? cpuFilterStr : '(all)'}</a></td>
          <td>${set.size}</td>
        </tr>
    `;
  }
  html += `
      </table>
    </div>
  `;
  document.write(html);
})(window.BENCHMARK_DATA, unescape(location.hash.substring(1)));
