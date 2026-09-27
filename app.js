const products=[
{id:1,name:"Netflix",description:"Abonnement Netflix 1 mois",price:3000,icon:"🎬"},
{id:2,name:"Prime Video",description:"Abonnement Prime Video 1 mois",price:3000,icon:"📺"},
{id:3,name:"Applications disponibles",description:"Service d'application disponible",price:2500,oldPrice:5000,icon:"📱"},
{id:4,name:"Spotify",description:"Abonnement Spotify 1 mois",price:3000,icon:"🎵"},
{id:5,name:"Snapchat+",description:"Abonnement Snapchat+",price:3500,icon:"👻"},
{id:6,name:"Compte PayPal",description:"Service de création de compte PayPal",price:7500,icon:"💳"},
{id:7,name:"Carte bancaire virtuelle",description:"Service de carte virtuelle",price:3500,icon:"💳"},
{id:8,name:"PayPal simple",description:"Service PayPal simple",price:4000,icon:"💰"}
];
let cart=[];
function renderProducts(){document.getElementById("products").innerHTML=products.map(p=>`<article class="product"><div class="product-icon">${p.icon}</div><h3>${p.name}</h3><p>${p.description}</p>${p.oldPrice?`<small><s>${p.oldPrice} FCFA</s></small>`:""}<span class="price">${p.price} FCFA</span><button class="add-btn" onclick="addToCart(${p.id})">🛒 Ajouter</button></article>`).join("")}
function addToCart(id){const p=products.find(x=>x.id===id);if(!p)return;const e=cart.find(x=>x.id===id);e?e.quantity++:cart.push({...p,quantity:1});updateCart();alert(`${p.name} ajouté au panier.`)}
function updateCart(){const count=cart.reduce((s,x)=>s+x.quantity,0);document.getElementById("cartCount").textContent=count;const c=document.getElementById("cartItems");if(!cart.length){c.innerHTML="<p>Votre panier est vide.</p>";document.getElementById("cartTotal").textContent="0 FCFA";return}c.innerHTML=cart.map(x=>`<div class="cart-item"><span>${x.icon} ${x.name} × ${x.quantity}</span><strong>${x.price*x.quantity} FCFA</strong></div>`).join("");document.getElementById("cartTotal").textContent=`${cart.reduce((s,x)=>s+x.price*x.quantity,0)} FCFA`}
function openCart(){document.getElementById("cartModal").style.display="block";updateCart()}
function closeCart(){document.getElementById("cartModal").style.display="none"}
async function checkout(){if(!cart.length){alert("Votre panier est vide.");return}const total=cart.reduce((s,x)=>s+x.price*x.quantity,0);alert(`Commande de ${total} FCFA prête.\n\nLe paiement sera connecté à Supabase/Chariow dans l'étape suivante.`)}
renderProducts();updateCart();
