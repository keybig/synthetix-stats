export const formatPercent = Intl.NumberFormat("en-US", {
    style: "percent",
});

export const formatNumber = Intl.NumberFormat("en-US")

export const formatMoney = Intl.NumberFormat("en-US", {
    style: "currency",
    currency:"usd"
});