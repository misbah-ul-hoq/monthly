// (  ) #

function selector(data) {
  return document.querySelector(data);
}

const allInputs = document.querySelectorAll("input");

const btn = selector("button");

// Broiler
const brOpen = selector("#br-op");
const brReBh = selector("#br-re-bh");
const brReBo = selector("#br-re-bo");
const brReSr = selector("#br-re-sr");
const brRet = selector("#br-ret");
const brDis = selector("#br-dis");
const brCls = selector(".br-cls");

// Layer
const lrOpen = selector("#lr-op");
const lrReBh = selector("#lr-re-bh");
const lrReBo = selector("#lr-re-bo");
const lrReSr = selector("#lr-re-sr");
const lrRet = selector("#lr-ret");
const lrDis = selector("#lr-dis");
const lrCls = selector(".lr-cls");

// Sonali
const slOpen = selector("#sl-op");
const slReBh = selector("#sl-re-bh");
const slReBo = selector("#sl-re-bo");
const slReSr = selector("#sl-re-sr");
const slRet = selector("#sl-ret");
const slDis = selector("#sl-dis");
const slCls = selector(".sl-cls");

// Cattle
const ctOpen = selector("#ct-op");
const ctReBh = selector("#ct-re-bh");
const ctReBo = selector("#ct-re-bo");
const ctReSr = selector("#ct-re-sr");
const ctRet = selector("#ct-ret");
const ctDis = selector("#ct-dis");
const ctCls = selector(".ct-cls");

// floating
const flOpen = selector("#fl-op");
const flReBh = selector("#fl-re-bh");
const flReBo = selector("#fl-re-bo");
const flReSr = selector("#fl-re-sr");
const flRet = selector("#fl-ret");
const flDis = selector("#fl-dis");
const flCls = selector(".fl-cls");

// Sinking
const skOpen = selector("#sk-op");
const skReBh = selector("#sk-re-bh");
const skReBo = selector("#sk-re-bo");
const skReSr = selector("#sk-re-sr");
const skRet = selector("#sk-ret");
const skDis = selector("#sk-dis");
const skCls = selector(".sk-cls");

// Text Contents
const totalOpen = selector(".total-open");
const totalReBh = selector(".total-re-bh");
const totalReBo = selector(".total-re-bo");
const totalReSr = selector(".total-re-sr");
const totalRec = selector(".total-rec");
const totalRet = selector(".total-ret");
const totalDis = selector(".total-dis");
const totalCls = selector(".total-cls");
const brTotalRec = selector(".br-total-rec");
const lrTotalRec = selector(".lr-total-rec");
const slTotalRec = selector(".sl-total-rec");
const ctTotalRec = selector(".ct-total-rec");
const flTotalRec = selector(".fl-total-rec");
const skTotalRec = selector(".sk-total-rec");

btn.addEventListener("click", () => {
  allInputs.forEach((e) => {
    if (e.value === "") {
      e.value = 0;
    }
  });
  //console.log(brOpen.value, brOpen.value === "");
  //   total opening balance count
  let totalOpenCount =
    parseInt(brOpen.value) +
    parseInt(lrOpen.value) +
    parseInt(slOpen.value) +
    parseInt(ctOpen.value) +
    parseInt(flOpen.value) +
    parseInt(skOpen.value);

  // Total Rec From different Places
  let totalRecBhCount =
    parseInt(brReBh.value) +
    parseInt(lrReBh.value) +
    parseInt(slReBh.value) +
    parseInt(ctReBh.value) +
    parseInt(flReBh.value) +
    parseInt(skReBh.value);

  let totalRecBoCount =
    parseInt(brReBo.value) +
    parseInt(lrReBo.value) +
    parseInt(slReBo.value) +
    parseInt(ctReBo.value) +
    parseInt(flReBo.value) +
    parseInt(skReBo.value);

  let totalRecSrCount =
    parseInt(brReSr.value) +
    parseInt(lrReSr.value) +
    parseInt(slReSr.value) +
    parseInt(ctReSr.value) +
    parseInt(flReSr.value) +
    parseInt(skReSr.value);

  // single Item Total received count
  let brTotalRecCount =
    parseInt(brReBh.value) + parseInt(brReBo.value) + parseInt(brReSr.value);
  let lrTotalRecCount =
    parseInt(lrReBh.value) + parseInt(lrReBo.value) + parseInt(lrReSr.value);
  let slTotalRecCount =
    parseInt(slReBh.value) + parseInt(slReBo.value) + parseInt(slReSr.value);
  let ctTotalRecCount =
    parseInt(ctReBh.value) + parseInt(ctReBo.value) + parseInt(ctReSr.value);
  let flTotalRecCount =
    parseInt(flReBh.value) + parseInt(flReBo.value) + parseInt(flReSr.value);
  let skTotalRecCount =
    parseInt(skReBh.value) + parseInt(skReBo.value) + parseInt(skReSr.value);

  let totalRecCount =
    brTotalRecCount +
    lrTotalRecCount +
    slTotalRecCount +
    ctTotalRecCount +
    flTotalRecCount +
    skTotalRecCount;

  let totalReturnCount =
    parseInt(brRet.value) +
    parseInt(lrRet.value) +
    parseInt(slRet.value) +
    parseInt(ctRet.value) +
    parseInt(flRet.value) +
    parseInt(skRet.value);

  let toalDisCount =
    parseInt(brDis.value) +
    parseInt(lrDis.value) +
    parseInt(slDis.value) +
    parseInt(ctDis.value) +
    parseInt(flDis.value) +
    parseInt(skDis.value);
  let totalBrClsCount =
    parseInt(brOpen.value) +
    brTotalRecCount -
    parseInt(brRet.value) -
    parseInt(brDis.value);

  let totalLrClsCount =
    parseInt(lrOpen.value) +
    lrTotalRecCount -
    parseInt(lrRet.value) -
    parseInt(lrDis.value);

  let totalSlClsCount =
    parseInt(slOpen.value) +
    slTotalRecCount -
    parseInt(slRet.value) -
    parseInt(slDis.value);

  let totalCtClsCount =
    parseInt(ctOpen.value) +
    ctTotalRecCount -
    parseInt(ctRet.value) -
    parseInt(ctDis.value);

  let totalFlClsCount =
    parseInt(flOpen.value) +
    flTotalRecCount -
    parseInt(flRet.value) -
    parseInt(flDis.value);

  let totalSkClsCount =
    parseInt(skOpen.value) +
    skTotalRecCount -
    parseInt(skRet.value) -
    parseInt(skDis.value);

  totalOpen.textContent = totalOpenCount;
  totalReBh.textContent = totalRecBhCount;
  totalReBo.textContent = totalRecBoCount;
  totalReSr.textContent = totalRecSrCount;
  brTotalRec.textContent = brTotalRecCount;
  lrTotalRec.textContent = lrTotalRecCount;
  slTotalRec.textContent = slTotalRecCount;
  ctTotalRec.textContent = ctTotalRecCount;
  flTotalRec.textContent = flTotalRecCount;
  skTotalRec.textContent = skTotalRecCount;
  totalRec.textContent = totalRecCount;
  totalRet.textContent = totalReturnCount;
  totalDis.textContent = toalDisCount;
  brCls.textContent = totalBrClsCount;
  lrCls.textContent = totalLrClsCount;
  slCls.textContent = totalSlClsCount;
  ctCls.textContent = totalCtClsCount;
  flCls.textContent = totalFlClsCount;
  skCls.textContent = totalSkClsCount;
  totalCls.textContent =
    totalBrClsCount +
    totalLrClsCount +
    totalSlClsCount +
    totalCtClsCount +
    totalFlClsCount +
    totalSkClsCount;
});
