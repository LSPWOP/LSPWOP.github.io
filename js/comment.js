var cs = new CommentSys(firebase.database().ref('/jamx/comments/'), addComment, 'de')

function newComment() {
  var name = document.getElementById('input').value
  var comment = document.getElementById('textarea').value
  cs.newComment({
    first_name: name,
    last_name: '-',
    comment: comment
  })
}

function addComment(c) {
  var main = document.createElement('div')
  main.className = 'comment'
  main.innerHTML = `
  <h6>${c.first_name} (${c.date})</h6>
  <p>${c.comment}</p>
  `
  var ins = document.getElementById('comment')
  if (ins.children.length == 0)
    ins.appendChild(main)
  else
    ins.insertBefore(main, ins.children[0])
}