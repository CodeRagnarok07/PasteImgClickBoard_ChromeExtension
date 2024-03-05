
(()=>{

    (()=>{
        const inputFiles:NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type='file']")
   
        
        for (let index = 0; index < inputFiles.length; index++) {
          const input = inputFiles[index];
          // estilado de clipboard_parent_div
          // estilado de clipboard_img_preview
          // estilado de clipboard_text_input


          const fileInputContent = document.createElement("div")
          fileInputContent.className ="clipboard_parent_div"

          if(input.parentNode){

              input.parentNode.appendChild(fileInputContent)
    
              const inputText = document.createElement("input")
              inputText.type = "text"
              inputText.className ="clipboard_text_input"
              inputText.placeholder="+ paste file"
    
    
              const imgPreview = document.createElement("img")
              imgPreview.className ="clipboard_img_preview"
    
              fileInputContent.appendChild(input)
              fileInputContent.appendChild(inputText)
              fileInputContent.appendChild(imgPreview)
    
              
              inputText.addEventListener('paste', e => {
                if(e.clipboardData){
                    input.files = e.clipboardData.files;    
                    input.dispatchEvent(new Event('change', { bubbles: true }));

                    if(input.files){
                        const [file] = input.files
                        imgPreview.src = URL.createObjectURL(file)
                      }     

                }

              });
          }
        }
      })()

})();