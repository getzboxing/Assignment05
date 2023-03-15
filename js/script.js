const tbId = document.getElementById('tbId')
const tbname = document.getElementById('tbname')
const tbext = document.getElementById('tbext')
const tbemail = document.getElementById('tbemail')
const tbdept = document.getElementById('tbdept')

let div = document.querySelector('div')

const displayEmpInfo = (e) => {
  console.log('\n')
  console.log('Id:\t\t', tbId.value)
  console.log('Name:\t', tbname.value)
  console.log('Ext:\t', tbext.value)
  console.log('Email:\t', tbemail.value)
  console.log('Depart:\t', tbdept.value)
  console.log('\n')
}
div.addEventListener('click', displayEmpInfo)
