$(function(){var ultimo;var dactual=0;var vactual=0;var tipos_rel=["Precuela","Secuela","Historia Principal","Historia Paralela","Historia Completa","Resumen"]
var audios={"JP":"Japonés","EN":"Inglés","ES_LA":"Español Latino","ES_ES":"Español España"};var subss={"NO":"No","EN":"Inglés","ES":"Español Neutro","ES_LA":"Español Latino","ES_ES":"Español España","CH":"Chino","BR":"Portugués"};var ress=["240","360","480","720","1080"];var formatos=["3GP","AVI","FLV","MKV","MP4","MPEG","WMV"];var calidades=["Muy Mala","Mala","Promedio","Buena","Muy Buena"];$.usu_actual="";agregar_video=function(vid,url,audio,subs,calidad,fid,fansub,usuario,eliminado){vid=vid||0;url=url||"";audio=audio||"JP";subs=subs||"ES";calidad=calidad||3;fid=fid||0;fansub=fansub||"";usuario=usuario||$.usu_actual;audios_sel='';for(x in audios){audios_sel+='<option value="'+x+'"'+(x==audio?' selected="selected"':'')+'>'+audios[x]+'</option>';}
subs_sel='';for(x in subss){subs_sel+='<option value="'+x+'"'+(x==subs?' selected="selected"':'')+'>'+subss[x]+'</option>';}
cal_sel='';for(x in calidades){cal_sel+='<option value="'+x+'"'+(x==calidad?' selected="selected"':'')+'>'+calidades[x]+'</option>';}
fansub_sel='<div class="fansub_box"><div class="fansub_bus"'+(fid!=0?' style="display: none;"':'')+'><input type="text" class="fs_buscar input-medium" size="10" /><img src="/img/i16/030.png" class="fs_buscale" /></div><div class="fansub_sel"'+(fid!=0?'':' style="display: none;"')+'><input type="hidden" class="fs_id" value="'+fid+'" name="video['+vactual+'][fs_id]" /><input type="text" class="fs_txt input-medium" value="'+fansub+'" size="10" readonly="readonly" /><img src="/img/i16/031.png" class="fs_cambiar" /></div></div>';$("#videos").append('<tr data-nuevo="'+(vid==0?'1':'0')+'"><td class="updown"></td><td><input type="hidden" name="video['+vactual+'][eliminado]" class="rel_elim" value="'+eliminado+'" /><input type="hidden" name="video['+vactual+'][vid]" class="vid_vid" value="'+vid+'" /><input type="text" name="video['+vactual+'][url]" value="'+url+'" class="input-medium" /></td><td><select name="video['+vactual+'][audio]" class="input-medium">'+audios_sel+'</select></td><td><select name="video['+vactual+'][subs]" class="input-medium">'+subs_sel+'</select></td><td><select name="video['+vactual+'][calidad]" class="input-medium">'+cal_sel+'</select></td><td>'+fansub_sel+'</td><td><input type="text" name="video['+vactual+'][usuario]" value="'+usuario+'" size="10" class="input-medium" readonly="readonly" /></td><td><img src="/img/i16/020.png" class="eli_row" /></td></tr>');vactual++;};agregar_descarga=function(did,url,peso,audio,subs,res,formato,fid,fansub,usuario,eliminado){did=did||0;url=url||"";peso=peso||0;audio=audio||"JP";subs=subs||"ES";res=res||"480";formato=formato||"MP4";fid=fid||0;fansub=fansub||"";usuario=usuario||$.usu_actual;audios_sel='';for(x in audios){audios_sel+='<option value="'+x+'"'+(x==audio?' selected="selected"':'')+'>'+audios[x]+'</option>';}
subs_sel='';for(x in subss){subs_sel+='<option value="'+x+'"'+(x==subs?' selected="selected"':'')+'>'+subss[x]+'</option>';}
res_sel='';for(x in ress){res_sel+='<option value="'+ress[x]+'"'+(ress[x]==res?' selected="selected"':'')+'>'+ress[x]+'P</option>';}
for_sel='';for(x in formatos){for_sel+='<option value="'+formatos[x]+'"'+(formatos[x]==formato?' selected="selected"':'')+'>'+formatos[x]+'</option>';}
fansub_sel='<div class="fansub_box"><div class="fansub_bus"'+(fid!=0?' style="display: none;"':'')+'><input type="text" class="fs_buscar input-medium" size="10" /><img src="/img/i16/030.png" class="fs_buscale" /></div><div class="fansub_sel"'+(fid!=0?'':' style="display: none;"')+'><input type="hidden" class="fs_id" value="'+fid+'" name="descarga['+dactual+'][fs_id]" /><input type="text" class="fs_txt input-medium" value="'+fansub+'" size="10" readonly="readonly" /><img src="/img/i16/031.png" class="fs_cambiar" /></div></div>';$("#descargas").append('<tr data-nuevo="'+(did==0?'1':'0')+'"><td class="updown"></td><td><input type="hidden" name="descarga['+dactual+'][eliminado]" class="rel_elim" value="'+eliminado+'" /><input type="hidden" name="descarga['+dactual+'][did]" class="des_did" value="'+did+'" /><input type="text" name="descarga['+dactual+'][url]" value="'+url+'" class="input-medium" /></td><td><input type="text" name="descarga['+dactual+'][peso]" class="span1" value="'+peso+'" size="2" /></td><td><select name="descarga['+dactual+'][audio]" class="input-medium">'+audios_sel+'</select></td><td><select name="descarga['+dactual+'][subs]" class="input-medium">'+subs_sel+'</select></td><td><select name="descarga['+dactual+'][resolucion]" class="input-small">'+res_sel+'</select></td><td><select name="descarga['+dactual+'][formato]" class="input-small">'+for_sel+'</select></td><td>'+fansub_sel+'</td><td><input type="text" name="descarga['+dactual+'][usuario]" size="10" value="'+usuario+'" class="input-medium" readonly="readonly" /></td><td><img src="/img/i16/020.png" class="eli_row" /></td></tr>');dactual++;};$("#avideo").click(function(){agregar_video();});$("#adescarga").click(function(){agregar_descarga();});$(".eli_row").live("click",function(){var elem=$(this).closest("tr");if(elem.attr('data-nuevo')==1){elem.remove();}else{elem.css("display","none");elem.find(".rel_elim").val(1);}});$("#brel_txt").keypress(function(e){if(e.which==13){busca_serie();return false;}});$("#brel").click(function(){busca_serie();});busca_serie=function(){var posicion=$("#brel_txt").offset();$("#lista").css("top",(posicion.top+ $("#brel_txt").outerHeight(true))).css("left",posicion.left);$.post("/ajax/animes/buscar_serie",{titulo:$("#brel_txt").val()},function(data){bserie(data);});}
bserie=function(datos){var resbox=$("#lista");if(datos.indexOf("error")!=0){var restxt="\n";var alista=datos.split("|-|");var total=alista.length;for(var i=0;i<total;i++){var fansub=alista[i].split("|");restxt+='<span rel="'+fansub[0]+'" class="sel_serie">'+ fansub[1]+'</i></span>\n';}
resbox.html(restxt);}else{var error=datos.split("|")[1];resbox.html(error);resbox.css("padding","10px");}
resbox.css("display","");}
$(".sel_serie").live("click",function(){$("#lista").css("display","none");$("#brel_txt").val("");agregar_serie_rel($(this).attr("rel"),$(this).text(),0,0,1);});agregar_serie_rel=function(aid,titulo,tipo,eliminado,nuevo){nuevo=nuevo||0;var opc_rel='';for(x in tipos_rel){opc_rel+='<option value="'+x+'"'+(x==tipo?' selected="selected"':'')+'>'+tipos_rel[x]+'</option>';}
$("#relacionados_lista").append('<div data-nuevo="'+nuevo+'" style="margin-top: 10px;'+(eliminado==1?' display: none;':'')+'"><input type="hidden" name="rel_id[]" value="'+aid+'" /><input type="hidden" name="rel_eliminado[]" class="rel_elim" value="'+eliminado+'" /><input type="text" readonly="readonly" value="'+titulo+'" style="width: 310px;"> <select style="width: 140px;" name="rel_tipo[]">'+opc_rel+'</select> <img src="/img/i16/020.png" class="eli_serie" /></div>');}
$(".eli_serie").live("click",function(){var elem=$(this).closest("div");if(elem.attr('data-nuevo')==1){elem.remove();}else{elem.css("display","none");elem.find(".rel_elim").val(1);}});buscale=function(e){ultimo=$(e).closest(".fansub_box");var fs_buscar=$(e).closest("div").find(".fs_buscar");var posicion=fs_buscar.offset();$("#lista").css("top",(posicion.top+ fs_buscar.outerHeight(true))).css("left",posicion.left);$.post("/ajax/fansubs/buscar",{buscar:fs_buscar.val()},function(data){bres(data);});}
$(".fs_buscale").live("click",function(){buscale(this);});$(".fs_buscar").live("keypress",function(e){if(e.which==13){buscale(this);return false;}});bres=function(datos){var resbox=$("#lista");if(datos.indexOf("error")!=0){var restxt="\n";var alista=datos.split("|-|");var total=alista.length;for(var i=0;i<total;i++){var fansub=alista[i].split("|");restxt+='<span rel="'+fansub[0]+'" class="sel_fansub">'+ fansub[1]+' - <i>('+ fansub[2]+')</i></span>\n';}
resbox.html(restxt);}else{var error=datos.split("|")[1];resbox.html(error);resbox.css("padding","10px");}
resbox.css("display","");}
$(".sel_fansub").live("click",function(){$("#lista").css("display","none");ultimo.find(".fansub_bus").css("display","none");ultimo.find(".fansub_sel").css("display","block");ultimo.find(".fs_id").val($(this).attr("rel"));ultimo.find(".fs_txt").val($(this).text());});$(".fs_cambiar").live("click",function(){var elem=$(this).closest(".fansub_box");var sel=elem.find(".fansub_sel");sel.css("display","none");sel.find(".fs_id").val("");sel.find(".fs_txt").val("");elem.find(".fansub_bus").css("display","block");});});