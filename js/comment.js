function newComment() {
  var firstName = document.getElementById('input').value
  var lastName = "__"
  var text = document.getElementById('textarea').value

  var comment = {
    firstName,
    lastName,
    text
  }

  cm.newComment(comment)
}

function errComment(e) {
  console.log(e)
}

function addComment(c) {
  var main = document.createElement('div')
  main.className = 'comment'
  main.innerHTML = `
  <h6>${c.firstName} (${c.date})</h6>
  <p>${c.text}</p>
  `
  var ins = document.getElementById('comment')
  if (ins.children.length == 0)
    ins.appendChild(main)
  else
    ins.insertBefore(main, ins.children[0])
}

var CommentConfig = {
  reference: firebase.database().ref('/jamx/comments/'),
  maxStorage: 15,
  dateFormat: 'de',
  addCallback: addComment,
  errCallback: errComment
}

var cm = new CommentSys(CommentConfig)