function toTitleCase(s) {
  if (s.length > 3) {
    return s.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  } else {
    return s.toUpperCase();
  }
}

function formatPrice(num) {
  return 'Rp' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function formatDate(strDate) {
  const strSplitDate = String(strDate).split(' ');
  const date = new Date(strSplitDate[0]);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  var MMM = '';
  switch (m) {
    case 1:
      MMM = 'Januari';
      break;
    case 2:
      MMM = 'Februari';
      break;
    case 3:
      MMM = 'Maret';
      break;
    case 4:
      MMM = 'April';
      break;
    case 5:
      MMM = 'Mei';
      break;
    case 6:
      MMM = 'Juni';
      break;
    case 7:
      MMM = 'Juli';
      break;
    case 8:
      MMM = 'Agustus';
      break;
    case 9:
      MMM = 'September';
      break;
    case 10:
      MMM = 'Oktober';
      break;
    case 11:
      MMM = 'November';
      break;
    case 12:
      MMM = 'Desember';
      break;
  }
  return d + ' ' + MMM + ' ' + yyyy;
}

export default toTitleCase;
export {formatPrice, formatDate};
