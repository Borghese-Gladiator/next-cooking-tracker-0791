export const formatDate = (date) => date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});