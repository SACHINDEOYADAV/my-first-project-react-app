function Hello() {

  let myName = 'Rowdey';
  let number = 123456799;
  let fullName = () => {
    return 'Rowdey Aana'
  }
  return <p>
    Hello this is future speaking {fullName()} {myName} {number}
  </p>
}

export default Hello;