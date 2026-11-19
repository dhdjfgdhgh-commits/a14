(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
var H=[[166,'No-show','Hidden inside the shoe.',['Loafers','Low trainers','Boat shoes']],[150,'Ankle','Just covers the ankle bone; stops the shoe rubbing.',['Running shoes','Trainers']],[124,'Quarter','A little above the ankle; a sporty middle ground.',['Running','Gym','Casual trainers']],[90,'Crew','The everyday classic, a few inches up the calf.',['Boots','Trainers','Casual shoes']],[56,'Mid-calf','Covers the calf so no skin shows when you sit.',['Dress shoes','Office','Hiking boots']],[22,'Knee-high','Up to just below the knee; warm and smart.',['Tall boots','Skirts and shorts','Cold days']]];
var hts=[].slice.call(document.querySelectorAll('input[name=ht]'));if(hts.length){var sk=$('sk'),sk2=$('sk2');function ht(){var k=3;hts.forEach(function(x){if(x.checked)k=+x.value;});var t=H[k][0];
 var d=k===0?'M44 190l-14 9c-14 9-10 41 12 41h66c18 0 28-16 28-34v-14c-20 4-60 2-92-2z':'M58 '+t+'v'+(170-t)+'c0 10-4 14-14 20l-14 9c-14 9-10 41 12 41h66c18 0 28-16 28-34v-36l-2-'+(170-t)+'z';
 sk.setAttribute('d',d);sk2.setAttribute('d',k===0?'':'M58 '+t+'h66v12H58z');$('ht-o').innerHTML='<h3>'+H[k][1]+'</h3><p>'+H[k][2]+'</p><ul>'+H[k][3].map(function(s){return '<li>'+s+'</li>';}).join('')+'</ul>';}
 hts.forEach(function(x){x.addEventListener('change',ht);});ht();}
var Z=[['Toes','Seamless or flat-linked toe seams stop rubbing at the tips. Give toes room: a sock that is too short pulls them down.'],['Ball of the foot','Takes the most pressure when walking and running. Look for extra cushioning here for long days on your feet.'],['Arch','A snug, ribbed arch band keeps the sock from twisting and sliding, which is a common cause of blisters.'],['Sides','Mesh or thinner zones let heat and sweat escape, especially in sport socks.'],['Heel','A deep, shaped heel pocket keeps the sock in place. Cushioning here helps on hard ground and in boots.']];
var zn=[].slice.call(document.querySelectorAll('.fb-zn'));if(zn.length){function z(i){zn.forEach(function(b,j){b.classList.toggle('on',i===j);b.setAttribute('aria-pressed',i===j?'true':'false');});$('zn-o').innerHTML='<h3>'+Z[i][0]+'</h3><p>'+Z[i][1]+'</p>';}zn.forEach(function(b,i){b.addEventListener('click',function(){z(i);});});z(1);}
var ss=$('sz-s');if(ss){var sn=$('sz-n'),cells=[].slice.call(document.querySelectorAll('.fb-ruler i'));function toEu(v,s){if(s==='eu')return v;if(s==='uk')return v+33.5;if(s==='usm')return v+33;return v+31;}
 function sz(){var v=parseFloat(sn.value),s=ss.value;if(isNaN(v)){$('sz-o').innerHTML='<p>Enter your shoe size.</p>';return;}var e=toEu(v,s),k=e<39?0:e<43?1:e<47?2:3,N=['S','M','L','XL'],R=['EU 35&ndash;38','EU 39&ndash;42','EU 43&ndash;46','EU 47&ndash;50'];
  if(e<30||e>52){$('sz-o').innerHTML='<p>That size is outside most adult sock charts. Check the brand&rsquo;s own chart.</p>';return;}
  $('sz-k').style.left=(k*25)+'%';cells.forEach(function(c,i){c.classList.toggle('on',i===k);});
  var edge=(e%4===2||e%4===2.5)&&k<3;$('sz-o').innerHTML='<strong>Sock size '+N[k]+'</strong><p>About EU '+(Math.round(e*2)/2)+' &middot; sock range '+R[k]+'.'+((e>=42&&e<43)||(e>=46&&e<47)||(e>=38&&e<39)?' You are at the top of this range: size up for thick or wool socks.':'')+'</p>';}
 ss.addEventListener('change',sz);sn.addEventListener('input',sz);sz();}
[].forEach.call(document.querySelectorAll('.fb-flip'),function(b){b.addEventListener('click',function(){b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')==='true'?'false':'true');});});
})();
