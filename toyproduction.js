const  newsetTimeout = delay => new Promise(resolve => setTimeout(resolve, delay));

const updateStatus = (elementId, status, colorClass) => {
  const statusElement = document.getElementById(elementId);
  statusElement.textContent = status;
  statusElement.classList.remove("made", "pending", "failed", "low-quality");
  statusElement.classList.add(colorClass);
};

const makeToy = async (timeToMake) => {
  updateStatus("makeStatus", "Toy: preparing...", "pending");
  try {
    await newsetTimeout(timeToMake * 1000);
    const success = Math.random() < 0.8;

    if (success) 
    {
      updateStatus("makeStatus", "Toy: is made", "made");
    } 
    else 
    {
      updateStatus("makeStatus", "Toy  made  low  quality", "low-quality");

    }
  } 
  catch (error) 
  {
    
    console.error("Error making toy:", error);
    updateStatus("makeStatus", "Toy: failed", "failed");
  }

};


const deliverToys = async (timeToDeliver) => 
{
  updateStatus("deliverStatus", "Delivery: delivering to storage...", "pending");
  await newsetTimeout(timeToDeliver * 1000);
  updateStatus("deliverStatus", "Delivery: ddelivered to storage", "made");

};

const sellToy = async (timeToSell) => {
  updateStatus("sellStatus", "Selling: selling...", "pending");
  await newsetTimeout(timeToSell * 1000);
  const lowQuality = Math.random() < 0.05;

  if (lowQuality) 
  {
    updateStatus("sellStatus", "Selling: Low-quality product, cannot be sold", "low-quality");
  } 
  else 
  {
    updateStatus("sellStatus", "Selling: successfully sold", "made");
  }
};

document.getElementById("startBtn").addEventListener("click", async () => {
  try {
    await makeToy(3);
    await deliverToys(2);
    await sellToy(1);
  } 
  catch (error) 
  {
    console.error("Error:", error);
  }
});
