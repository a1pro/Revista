import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  scrollContainer:{
    flexGrow:1
  },
  h1: {
    fontSize: 35,
    fontWeight: '600',
    color: '#ffff',
  },
  h2: {
    fontSize: 28,
    fontWeight: '400',
    color: '#ffff',
    lineHeight: 35,
  },
  h3: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffff',
  },
  h4: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 30,
    color:'#000',
  },
  h5: {
    fontSize: 18,
    fontWeight: '500',
    color:'#ffff',
  },
  h6: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#ffff',
    marginTop: 10,
  },
  btn: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#214357',
    width: 233,
    height: 62,
  },
 
  
  disabledBtn: {
    opacity: 0.2,
  },
  btntext: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  
  
  textfield: {
    backgroundColor: '#FFFFFF',
    // borderColor: '#25435F',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 18,
    marginTop: 10,
  },

  inputfield: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    borderColor: '#898585',
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
  textfield_wrapper: {
    width: '100%',
    marginBottom: 15,
  },
  
  errortext: {
    color: 'red',
    fontWeight: '400',
    paddingLeft:20,
    marginTop: 5,
  },
  headersection: {
    backgroundColor: '#00008B',
    width: '100%',
    // height: 65,
    flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   borderBottomLeftRadius:10,
   borderBottomRightRadius:10,
   marginTop:1,
   paddingTop:12,
   paddingBottom:12
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: '#ffff',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, 
    shadowRadius: 5,
    // Shadow for Android
    elevation: 5,
  },
  wrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:10
  },

  textinpt:{
    width:"90%",
    backgroundColor:"#D9D9D9",
    borderRadius:10,
    alignSelf:"center",
    paddingHorizontal:20
    // height:"20%"
},
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 80,
    width: '100%',
    paddingHorizontal: 15,
  },
  text_center: {
    textAlign: 'center',
    paddingTop: 8,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
flex:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
},

});
export default styles;
