let insuranceOffered = false;

function checkInsurance(){
  if(inRound && dealer[0].rank==='A' && !insuranceOffered){
    insuranceOffered = true;
    setStatus("Dealer shows an Ace! You can take Insurance.");
    document.getElementById('insuranceBtn').style.display = 'inline';
  } else {
    document.getElementById('insuranceBtn').style.display = 'none';
  }
}

document.getElementById('insuranceBtn').onclick = function(){
  if(!inRound) return;
  const dealerHasBJ = handTotals(dealer) === 21 && dealer.length===2;
  if(dealerHasBJ){
    setStatus("Dealer has Blackjack! Insurance pays out. You keep your main hand.");
  } else {
    setStatus("Dealer does not have Blackjack. Insurance lost, round continues.");
  }
  document.getElementById('insuranceBtn').style.display='none';
  insuranceOffered=false;
};

// Call checkInsurance after dealing
function deal(){ 
  if(inRound) return; 
  inRound=true; dealerHoleHidden=true; splitHands=[]; activeHand=0;
  player=[];dealer=[]; 
  player.push(draw());dealer.push(draw());player.push(draw());dealer.push(draw()); 
  renderHands(); 
  setStatus("Your move"); 
  checkInsurance();
}
