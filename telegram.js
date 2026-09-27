export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Méthode non autorisée"});
  try{
    const {message}=req.body||{};
    if(!message) return res.status(400).json({error:"Message manquant"});
    const token=process.env.TELEGRAM_BOT_TOKEN;
    const chatId=process.env.TELEGRAM_ADMIN_CHAT_ID;
    if(!token||!chatId) return res.status(500).json({error:"Configuration Telegram manquante"});
    const response=await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({chat_id:chatId,text:message})
    });
    return res.status(200).json(await response.json());
  }catch(error){return res.status(500).json({error:"Erreur Telegram"});}
}
