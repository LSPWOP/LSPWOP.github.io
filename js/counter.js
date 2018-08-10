var config = {
  apiKey: "AIzaSyB8cCHaIsBrUoH_45CSs4K2vUNrBreouaE",
  authDomain: "jamx-database.firebaseapp.com",
  databaseURL: "https://jamx-database.firebaseio.com",
  projectId: "jamx-database",
  storageBucket: "jamx-database.appspot.com",
  messagingSenderId: "182248577729"
};
firebase.initializeApp(config);
db = firebase.database()


db.ref('/jamx/counter').once('value').then((x) => {
  var data = x.val()
  document.getElementById('counter').innerHTML = data + 1
  if (!location.href.includes('localhost'))
    db.ref('/jamx/counter').set(data + 1)
})