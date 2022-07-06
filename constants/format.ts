export const formatPercent = Intl.NumberFormat("en-US", {
    style: "percent",
});

export const formatPercentDec = Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
});

export const formatNumber = Intl.NumberFormat("en-US")

export const formatMoney = Intl.NumberFormat("en-US", {
    style: "currency",
    currency:"usd"
});