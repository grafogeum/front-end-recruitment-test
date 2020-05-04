const linkProvider = () => {
  let copyBaconLink = document.getElementById('BaconWagon').firstChild.nextSibling.children[0].src;
  getLink = copyBaconLink;
  return    }

const createElem =()=> {

  let IMGcontainer = document.getElementById('BaconWagon');

  let IMGunit = document.createElement('img');
  let IMGunitCont = document.createElement('div');

  const params =()=> {
      width = IMGunit.style.width =  100 + '%';
      height = IMGunit.style.height =  100 + '%';

      displayFlex = IMGcontainer.style.display = 'flex';
      flexWrap = IMGcontainer.style.flexWrap = 'wrap';

      return    }

  setTimeout(() => {
          IMGcontainer.appendChild(IMGunitCont);
          IMGunitCont.appendChild(IMGunit);
          IMGunit.src= getLink;
        params()
                }, 200)

return    }


const init =()=> {

  linkProvider();
  const btn = document.getElementById('moreB')

  btn.addEventListener('click', createElem,false)

//  PRE-load image
  for (let i = 0; i < 1; i++) {createElem(getLink)}

  return    }

window.onload = init
