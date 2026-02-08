
       
        function openTab(tabName) {
            
            document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
            
           
            document.getElementById(tabName).style.display = "block";
        }
  
