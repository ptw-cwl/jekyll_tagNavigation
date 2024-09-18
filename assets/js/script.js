//工具提示
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//搜索跳转
function searchTag() {
  var inputValue = document.getElementById('searchInput').value.trim();
  if (inputValue) {
      window.location.hash = inputValue;
  }
}
