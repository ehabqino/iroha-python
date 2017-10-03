Search.setIndex({docnames:["index","iroha","iroha.helper","iroha.lib","iroha.lib.ed25519","iroha.network","iroha.primitive","iroha.query","iroha.transaction"],envversion:53,filenames:["index.rst","iroha.rst","iroha.helper.rst","iroha.lib.rst","iroha.lib.ed25519.rst","iroha.network.rst","iroha.primitive.rst","iroha.query.rst","iroha.transaction.rst"],objects:{"":{iroha:[1,0,0,"-"]},"iroha.creator":{Creator:[1,1,1,""]},"iroha.creator.Creator":{create_query:[1,2,1,""],create_tx:[1,2,1,""],set_account_id:[1,2,1,""],set_connection:[1,2,1,""],set_keys:[1,2,1,""]},"iroha.helper":{crypto:[2,0,0,"-"],ed25519:[2,0,0,"-"],exception:[2,0,0,"-"],logger:[2,0,0,"-"],random:[2,0,0,"-"],stateless_validator:[2,0,0,"-"]},"iroha.helper.crypto":{KeyPair:[2,1,1,""],b64decode:[2,3,1,""],b64encode:[2,3,1,""],create_key_pair:[2,3,1,""],db_decode:[2,3,1,""],db_encode:[2,3,1,""],now:[2,3,1,""],sha3_256:[2,3,1,""],sign:[2,3,1,""],sign_hash:[2,3,1,""],verify:[2,3,1,""]},"iroha.helper.crypto.KeyPair":{private_key:[2,4,1,""],public_key:[2,4,1,""]},"iroha.helper.ed25519":{generate:[2,3,1,""],generate_int:[2,3,1,""],hex2bin:[2,3,1,""],sign:[2,3,1,""],sign_int:[2,3,1,""],verify:[2,3,1,""],verify_int:[2,3,1,""],verify_with_hex:[2,3,1,""]},"iroha.helper.exception":{InvalidIpException:[2,5,1,""],InvalidPortException:[2,5,1,""],IrohaPythonException:[2,5,1,""],NotAccountAssetResponseException:[2,5,1,""],NotAccountResponseException:[2,5,1,""],NotCommandException:[2,5,1,""],NotConnectionStubException:[2,5,1,""],NotErrorResponseException:[2,5,1,""],NotSignatoriesResponseExcepiton:[2,5,1,""],NotTransactionsResponseException:[2,5,1,""]},"iroha.helper.exception.InvalidIpException":{message:[2,4,1,""]},"iroha.helper.exception.InvalidPortException":{message:[2,4,1,""]},"iroha.helper.exception.IrohaPythonException":{message:[2,4,1,""]},"iroha.helper.exception.NotAccountAssetResponseException":{message:[2,4,1,""]},"iroha.helper.exception.NotAccountResponseException":{message:[2,4,1,""]},"iroha.helper.exception.NotCommandException":{message:[2,4,1,""]},"iroha.helper.exception.NotConnectionStubException":{message:[2,4,1,""]},"iroha.helper.exception.NotErrorResponseException":{message:[2,4,1,""]},"iroha.helper.exception.NotSignatoriesResponseExcepiton":{message:[2,4,1,""]},"iroha.helper.exception.NotTransactionsResponseException":{message:[2,4,1,""]},"iroha.helper.logger":{debug:[2,3,1,""],info:[2,3,1,""],setDebug:[2,3,1,""],setInfo:[2,3,1,""],setWarning:[2,3,1,""],warning:[2,3,1,""]},"iroha.helper.random":{uuid:[2,3,1,""]},"iroha.helper.stateless_validator":{add_asset_quantity:[2,3,1,""],add_signatory:[2,3,1,""],command:[2,3,1,""],create_account:[2,3,1,""],create_asset:[2,3,1,""],create_domain:[2,3,1,""],get_account:[2,3,1,""],get_account_asset_transactions:[2,3,1,""],get_account_assets:[2,3,1,""],get_account_transactions:[2,3,1,""],get_signatories:[2,3,1,""],get_transactions:[2,3,1,""],query:[2,3,1,""],remove_signatory:[2,3,1,""],set_account_quorum:[2,3,1,""],transfer_asset:[2,3,1,""],verify:[2,3,1,""],verify_account_id:[2,3,1,""],verify_account_name:[2,3,1,""],verify_amount:[2,3,1,""],verify_asset_id:[2,3,1,""],verify_asset_name:[2,3,1,""],verify_created_time:[2,3,1,""],verify_domain_id:[2,3,1,""],verify_ip:[2,3,1,""],verify_port:[2,3,1,""],verify_pubkey:[2,3,1,""],verify_quorum:[2,3,1,""]},"iroha.lib":{ed25519:[4,0,0,"-"]},"iroha.network":{connection:[5,0,0,"-"]},"iroha.network.connection":{Connection:[5,1,1,""]},"iroha.network.connection.Connection":{gen_stub:[5,2,1,""],query_stub:[5,2,1,""],set_env:[5,2,1,""],tx_stub:[5,2,1,""]},"iroha.primitive":{amount:[6,0,0,"-"],signatories:[6,0,0,"-"]},"iroha.primitive.amount":{amount2int:[6,3,1,""],int2amount:[6,3,1,""]},"iroha.primitive.signatories":{Signatories:[6,1,1,""]},"iroha.primitive.signatories.Signatories":{append:[6,2,1,""],clean:[6,2,1,""],sign:[6,2,1,""],size:[6,2,1,""]},"iroha.query":{query:[7,0,0,"-"],request:[7,0,0,"-"],response:[7,0,0,"-"]},"iroha.query.query":{Query:[7,1,1,""]},"iroha.query.query.Query":{debug_proto_query:[7,2,1,""],hash:[7,2,1,""],issue:[7,2,1,""],set_connection:[7,2,1,""],set_creator_account_id:[7,2,1,""],set_query_counter:[7,2,1,""],set_request:[7,2,1,""],time_stamp:[7,2,1,""],verify:[7,2,1,""]},"iroha.query.request":{wrap_query:[7,3,1,""]},"iroha.query.response":{Response:[7,1,1,""]},"iroha.query.response.Response":{account:[7,2,1,""],account_asset:[7,2,1,""],error_response:[7,2,1,""],has_account:[7,2,1,""],has_account_asset:[7,2,1,""],has_error:[7,2,1,""],has_signatories:[7,2,1,""],has_transactions:[7,2,1,""],signatories:[7,2,1,""],transactions:[7,2,1,""],verify:[7,2,1,""]},"iroha.transaction":{command:[8,0,0,"-"],transaction:[8,0,0,"-"]},"iroha.transaction.command":{wrap_cmd:[8,3,1,""]},"iroha.transaction.transaction":{Transaction:[8,1,1,""]},"iroha.transaction.transaction.Transaction":{add_command:[8,2,1,""],add_commands:[8,2,1,""],add_key_pair:[8,2,1,""],add_key_pairs:[8,2,1,""],check:[8,2,1,""],count_signatures:[8,2,1,""],debug_proto_transaction:[8,2,1,""],hash:[8,2,1,""],issue:[8,2,1,""],set_connection:[8,2,1,""],set_creator_account_id:[8,2,1,""],set_tx_counter:[8,2,1,""],sign:[8,2,1,""],signatories_clean:[8,2,1,""],signatures_clean:[8,2,1,""],time_stamp:[8,2,1,""],verify:[8,2,1,""]},iroha:{creator:[1,0,0,"-"],gen_connection:[1,3,1,""],gen_creator:[1,3,1,""],helper:[2,0,0,"-"],keygen:[1,3,1,""],lib:[3,0,0,"-"],network:[5,0,0,"-"],primitive:[6,0,0,"-"],query:[7,0,0,"-"],setDebugLog:[1,3,1,""],setInfoLog:[1,3,1,""],setWarningLog:[1,3,1,""],transaction:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception"},terms:{"byte":[7,8],"class":[1,2,5,6,7,8],"default":5,"function":[7,8],"int":[5,7,8],"public":[1,2,8],"return":[1,5,7,8],"true":[7,8],The:[7,8],account:[1,7,8],account_asset:7,account_id:[1,2],account_nam:2,add:8,add_asset_quant:2,add_command:8,add_key_pair:8,add_signatori:2,addassetquant:8,added:1,address:[1,5],addsignatori:8,after:8,alia:2,all:8,amount2int:6,amount:[0,1,2],anoth:5,append:6,arbitrari:5,arg:[1,5,7,8],argument:5,arrai:[1,8],asset_id:2,asset_nam:2,b64decod:2,b64encod:2,base64:1,base:[1,2,5,6,7,8],bool:[7,8],call:[5,7,8],can:1,check:8,clean:6,cmd:[2,8],code:8,command:[0,1,2],commandservicestub:5,conncect:1,connect:[0,1,7,8],connection_env:5,connector:1,connevtin:7,content:0,count:8,count_signatur:8,counter:[7,8],creat:[1,7],create_account:2,create_asset:2,create_domain:2,create_key_pair:2,create_queri:1,create_tx:1,createaccount:8,createasset:8,createdomain:8,creator:[0,7,8],creator_account_id:[1,7,8],crypto:[0,1],current:[7,8],data:7,db_decod:2,db_encod:2,debug:[2,7],debug_proto_queri:7,debug_proto_transact:8,delet:8,domain_id:2,don:5,ed25519:[0,1,3],encod:1,environemnt:5,error:[2,5],error_respons:7,except:[0,1],fail:5,fals:[7,8],field:2,from:[7,8],func:8,gen_connect:1,gen_creat:1,gen_stub:5,gener:[1,2,5,8],generate_int:2,get:[5,7,8],get_account:2,get_account_asset:2,get_account_asset_transact:2,get_account_transact:2,get_signatori:2,get_transact:2,getaccount:7,getaccountasset:7,getaccountassettransact:7,getaccounttransact:7,getsignatori:7,gettransact:7,got:1,had:7,has:[1,5],has_account:7,has_account_asset:7,has_error:7,has_signatori:7,has_transact:7,hash:[7,8],helper:[0,1],hex2bin:2,hyperledg:1,includ:8,index:0,info:[2,8],initi:5,int2amount:6,int_num:6,invalidipexcept:2,invalidportexcept:2,irohapythonexcept:2,issu:[7,8],kei:[1,8],key_pair:2,keygen:[1,8],keypair:[1,2,6,8],keyword:5,lib:[0,1],librari:1,logger:[0,1],manag:5,mayb:5,mean:1,messag:2,modul:0,network:[0,1],none:[1,2],notaccountassetresponseexcept:2,notaccountresponseexcept:2,notcommandexcept:2,notconnectionstubexcept:[2,5],note:5,noterrorresponseexcept:2,notsignatoriesresponseexcepiton:2,nottransactionsresponseexcept:2,now:2,num:2,number:[1,2,5,8],object:[1,5,6,7,8],occur:2,option:2,otherwis:[7,8],packag:0,page:0,peer_ip:2,peer_port:2,port:[1,5],precis:6,primit:[0,1],privat:[1,2,8],private_kei:[1,2],proto:[2,7],protobuf:[7,8],pubkei:2,public_kei:[1,2],python:1,qry:2,queri:[0,1,2,5],query_count:7,query_payload:7,query_respons:7,query_stub:5,queryrespons:7,queryservicestub:5,querystub:5,quorum:2,rais:5,random:[0,1],refer:1,remove_signatori:2,removesignatori:8,req:2,request:[0,1],respond:7,respons:[0,1],search:0,servic:5,set:[1,5,7,8],set_account_id:1,set_account_quorum:2,set_connect:[1,7,8],set_creator_account_id:[7,8],set_env:5,set_kei:1,set_query_count:7,set_request:7,set_tx_count:8,setaccountquorum:8,setdebug:2,setdebuglog:1,setinfo:2,setinfolog:1,setwarn:2,setwarninglog:1,sha3_256:[1,2],sign:[2,6,7,8],sign_hash:2,sign_int:2,signatoi:1,signatori:[0,1,7,8],signatories_clean:8,signatur:[2,8],signatures_clean:8,size:6,sourc:[1,2,5,6,7,8],stamp:1,stateless:[7,8],stateless_valid:[0,1],statu:8,str:[1,5,7,8],strcutur:7,string:[1,5],structr:8,structur:7,stub:5,submodul:0,subpackag:0,success:[7,8],thi:[1,7,8],tima:1,time:[1,2,7,8],time_stamp:[7,8],timestamp:[7,8],transact:[0,1,2,5,7],transactionstub:5,transction:8,transfer_asset:2,transferasset:8,tupl:2,tx_counter:8,tx_stub:5,txstatusrespons:8,type:8,used:[1,7,8],uuid:2,valid:[7,8],valu:[7,8],verifi:[2,7,8],verify_account_id:2,verify_account_nam:2,verify_amount:2,verify_asset_id:2,verify_asset_nam:2,verify_created_tim:2,verify_domain_id:2,verify_int:2,verify_ip:2,verify_port:2,verify_pubkei:2,verify_quorum:2,verify_with_hex:2,warn:2,when:5,wrap:7,wrap_cmd:8,wrap_queri:7},titles:["Welcome to iroha\u2019s documentation!","iroha package","iroha.helper package","iroha.lib package","iroha.lib.ed25519 package","iroha.network package","iroha.primitive package","iroha.query package","iroha.transaction package"],titleterms:{amount:6,command:8,connect:5,content:[1,2,3,4,5,6,7,8],creator:1,crypto:2,document:0,ed25519:[2,4],except:2,helper:2,indic:0,iroha:[0,1,2,3,4,5,6,7,8],lib:[3,4],logger:2,modul:[1,2,3,4,5,6,7,8],network:5,packag:[1,2,3,4,5,6,7,8],primit:6,queri:7,random:2,request:7,respons:7,signatori:6,stateless_valid:2,submodul:[1,2,5,6,7,8],subpackag:[1,3,4],tabl:0,transact:8,welcom:0}})