const lscheme=document.getElementById('lscheme')
const pcost=document.getElementById('lscheme')
const lamount=document.getElementById('lamount')
const phno=document.getElementById('phno')
const accno=document.getElementById('accno')
const form=document.getElementById('form')
const dcme16=document.getElementById('dcme16')
const dcme26=document.getElementById('dcme26')
const dcme36=document.getElementById('dcme36')
const dsedp11=document.getElementById('dsedp11')
const dsedp21=document.getElementById('dsedp21')
const dsedp31=document.getElementById('dsedp31')

const errorElement=document.getElementById('error')

form.addEventListener('submit',(e) =>
{
    let messages = []
    if(lscheme.value==='' || lscheme.value==null)
    { messages.push('All fields not filled')}

    if(phno.value.length !== 10)
    { messages.push('Invalid Phone number')}

    if(accno.value.length >= 9 || accno.value.length <= 18)
    { messages.push('Invalid Account number')}

    if(dcme16.value.length !== 10 || dcme26.value.length !== 10 || dcme36.value.length !== 10)
    { messages.push('Invalid Phone or Landline number')}

    if(dsedp11.value.length !== 4 || dsedp21.value.length !== 4 || dsedp31.value.length !== 4)
    { messages.push('Invalid Year')}

    if(messages.length > 0)
    { e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
    e.preventDefault()
})