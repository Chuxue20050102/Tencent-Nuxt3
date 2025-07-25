// import { onMounted, onUnmounted, type Ref } from 'vue'
export function useDragSwitch(
  whoRef:Ref<HTMLElement|null>,
  PrevOne:()=>void,
  NextOne:()=>void,
  minlength = 60
){
  let startX=0
  let isDragging = false

  function onMouseDown(me:MouseEvent){
    isDragging = true
    startX = me.clientX
    document.addEventListener('mousemove',onMouseMove)
    document.addEventListener('mouseup',onMouseUp)
  }
  function onMouseMove(me:MouseEvent){
    const distance = me.clientX - startX
    if(!isDragging) return
    if(Math.abs(distance)>minlength){
      if(distance>0){
        PrevOne()
      }else{
        NextOne()
      }
      isDragging = false
      document.removeEventListener('mousemove',onMouseMove)
      document.removeEventListener('mouseup',onMouseUp)
    }
  }
  function onMouseUp(){
    isDragging = false
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  onMounted(()=>{
    if(whoRef.value){
      whoRef.value.addEventListener('mousedown', onMouseDown)
    }
  })
  onUnmounted(() => {
    if (whoRef.value) {
      whoRef.value.removeEventListener('mousedown', onMouseDown)
    }
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  })

}