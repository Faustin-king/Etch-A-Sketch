const container = document.querySelector('#container')

// create a default grid sized 16X16

function defaultGrid() {
  makeRows(16)
  makeColumns(16)
}

const row = document.createElement('div')
container.appendChild(row).className = 'gridRow'

const column = document.createElement('div')
column.appendChild(column).className = 'gidColumn'
