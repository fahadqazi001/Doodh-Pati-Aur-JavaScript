 // document.getElementById('prayer').onclick = function () {
    //     alert ('click prayer')
    // }

    // attachEvent()
    // jQuery - on

    // important topics of Events :-
    // type, timeStamp, defaultPrevented
    // target, toElement, srcElement, currentTarget
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('prayer').addEventListener('click', function(){
    //     alert('click prayer again')
    // })

    // document.getElementById('images').addEventListener('click', function(e){
    //    console.log('Clicked inside the ul');
    // }, false)

    // document.getElementById('prayer').addEventListener('click', function(e){
    //    console.log('Click prayer');
    //    e.stopPropagation()
    // }, false)

    // document.getElementById('google').addEventListener('click', function(e){
    //     e.preventDefault()
    //     e.stopPropagation()
    //     console.log('click on google'); 
    // })

    document.querySelector('#images').addEventListener('click', function (e) {
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
            // removeIt.parentNode.removeChild(removeIt)
        }
    })
