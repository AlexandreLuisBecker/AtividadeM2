import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  formContainer: {
    flexDirection: 'row',
    height: 80,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    paddingLeft: 16,
    flex: 1,
    marginRight: 5
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: '#788eec',
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonExcluir: {
    marginRight: 2, 
    height: 47,
    borderRadius: 5,
    backgroundColor: '#788eec',
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCadastro:{
    color:"#fff",
    fontWeight:'600',
    fontSize: 40,
    marginBottom:20,
    textAlign:'center'
},
textOp:{
  color:"#fff",
  fontWeight:'600',
  fontSize: 14,
  marginBottom:20,
  textAlign:'center'

},
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  listContainer: {
    marginTop: 20,
    padding: 20
  },
  entityContainer: {
    marginTop: 16,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingBottom: 16
  },
  entityText: {
    fontSize: 20,
    color: '#333333'
  }
})
