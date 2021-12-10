let cubeCrea = function ($borderColor, $boxShadow) {

    let cube = document.createElement('div');
    cube.classList.add('cube');

    let front = document.createElement('div');
    let back = document.createElement('div');
    let left = document.createElement('div');
    let right = document.createElement('div');
    let top = document.createElement('div');
    let bottom = document.createElement('div');

    cube.append(front, back, left, right, top, bottom);

    front.classList.add('face', 'front');
    back.classList.add('face', 'back');
    left.classList.add('face', 'left');
    right.classList.add('face', 'right');
    top.classList.add('face', 'top');
    bottom.classList.add('face', 'bottom');

    front.style.border = '1px solid' + $borderColor;
    front.style.boxShadow = '0 0 13px 1px' + $boxShadow;
    back.style.border = '1px solid' + $borderColor;
    back.style.boxShadow = '0 0 13px 1px' + $boxShadow;
    left.style.border = '1px solid' + $borderColor;
    left.style.boxShadow = '0 0 13px 1px' + $boxShadow;
    right.style.border = '1px solid' + $borderColor;
    right.style.boxShadow = '0 0 13px 1px' + $boxShadow;
    top.style.border = '1px solid' + $borderColor;
    top.style.boxShadow = '0 0 13px 1px' + $boxShadow;
    bottom.style.border = '1px solid' + $borderColor;
    bottom.style.boxShadow = '0 0 13px 1px' + $boxShadow;


    return cube;

}

export {cubeCrea};