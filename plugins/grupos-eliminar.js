const handler=async(_0xe926bd,{conn:_0x1d36a0,participants:_0x5898a6,command:_0x12a6a8,usedPrefix:_0x317730})=>{if(!global['db']['data']['settings'][_0x1d36a0['user']['jid']]['restrict'])throw'*<\x20GRUPOS\x20-\x20ELIMINAR\x20/>*_\x0a\x0a*El\x20propietario\x20del\x20bot\x20ha\x20activado\x20la\x20función\x20de\x20restricción\x20(*_restrict_*),\x20por\x20lo\x20que\x20no\x20se\x20ejecutó\x20el\x20comando\x20solicitado.*';const _0x4391ee='_*<\x20GRUPOS\x20-\x20ELIMINAR\x20/>*_\x0a\x0a*[\x20ℹ️\x20]\x20Etiqueta\x20o\x20responde\x20a\x20un\x20mensaje\x20del\x20participante\x20que\x20deseas\x20eliminar.*\x0a\x0a*[\x20💡\x20]\x20Ejemplo:*\x20_'+(_0x317730+_0x12a6a8)+'\x20@'+global['suittag']+'_';if(!_0xe926bd['mentionedJid'][0x0]&&!_0xe926bd['quoted'])return _0xe926bd['reply'](_0x4391ee,_0xe926bd['chat'],{'mentions':_0x1d36a0['parseMention'](_0x4391ee)});if(_0xe926bd['message']['extendedTextMessage']===undefined||_0xe926bd['message']['extendedTextMessage']===null)return _0xe926bd['reply']('*<\x20GRUPOS\x20-\x20ELIMINAR\x20/>*_\x0a\x0a*\x20Etiqueta\x20o\x20responde\x20a\x20un\x20mensaje\x20del\x20participante\x20que\x20deseas\x20eliminar.');if(_0xe926bd['message']['extendedTextMessage']['contextInfo']['participant']!==null&&_0xe926bd['message']['extendedTextMessage']['contextInfo']['participant']!=undefined&&_0xe926bd['message']['extendedTextMessage']['contextInfo']['participant']!==''){const _0x1f123e=_0xe926bd['message']['extendedTextMessage']['contextInfo']['mentionedJid'][0x0]?_0xe926bd['message']['extendedTextMessage']['contextInfo']['mentionedJid'][0x0]:_0xe926bd['message']['extendedTextMessage']['contextInfo']['participant'];if(_0x1d36a0['user']['jid']['includes'](_0x1f123e))return _0xe926bd['reply']('*<\x20GRUPOS\x20-\x20ELIMINAR\x20/>*_\x0a\x0a\x20El\x20bot\x20no\x20puede\x20eliminarse\x20a\x20si\x20mismo.*');const _0x3ddf08=await _0x1d36a0['groupParticipantsUpdate'](_0xe926bd['chat'],[_0x1f123e],'remove'),_0x3fbff1='*<\x20GRUPOS\x20-\x20ELIMINAR\x20/>*_\x0a\x0a*\x20El\x20participante\x20@'+_0x1f123e['split']('@')[0x0]+'\x20fue\x20eliminado.*',_0x19f61c='*<\x20GRUPOS\x20-\x20ELIMINAR\x20/>*_\x0a\x0a*\x20@'+_0x1f123e['split']('@')[0x0]+'\x20es\x20el\x20propietario\x20del\x20grupo,\x20por\x20lo\x20mismo\x20no\x20puede\x20ser\x20eliminado.*',_0x54e2ff='*<\x20GRUPOS\x20-\x20ELIMINAR\x20/>*_\x0a\x0a*\x20@'+_0x1f123e['split']('@')[0x0]+'\x20ya\x20fue\x20eliminado\x20o\x20salio\x20del\x20grupo.*';if(_0x3ddf08[0x0]['status']==='200')_0xe926bd['reply'](_0x3fbff1,_0xe926bd['chat'],{'mentions':_0x1d36a0['parseMention'](_0x3fbff1)});else{if(_0x3ddf08[0x0]['status']==='406')_0xe926bd['reply'](_0x19f61c,_0xe926bd['chat'],{'mentions':_0x1d36a0['parseMention'](_0x19f61c)});else{if(_0x3ddf08[0x0]['status']==='404')_0xe926bd['reply'](_0x54e2ff,_0xe926bd['chat'],{'mentions':_0x1d36a0['parseMention'](_0x54e2ff)});else _0x1d36a0['sendMessage'](_0xe926bd['chat'],{'text':'*<\x20GRUPOS\x20-\x20ELIMINAR\x20/>*_\x0a\x0a*\x20Ocurrió\x20un\x20error.\x20Por\x20favor,\x20inténtalo\x20de\x20nuevo\x20más\x20tarde.*','mentions':[_0xe926bd['sender']],'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}},{'quoted':_0xe926bd});}}}else{if(_0xe926bd['message']['extendedTextMessage']['contextInfo']['mentionedJid']!=null&&_0xe926bd['message']['extendedTextMessage']['contextInfo']['mentionedJid']!=undefined)return;}};handler['command']=/^(kick|expulsar|eliminar|echar|sacar)$/i,handler['admin']=handler['group']=handler['botAdmin']=!![],handler['register']=!![];export default handler;