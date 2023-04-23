function PageReplacement()
{
	var faults = 0;
	var hits = 0 ;
    var no_of_pages = document.getElementById("noOfpage");
    window.alert("Enter reference string values");
    var refStr = []
    for(var i=0; i< no_of_pages.value; i++)
    {
      refStr[i] = window.prompt("Enter Value no. ["+(i+1)+"]");
    }
    
    f = window.prompt("Enter the no. of frames");

       
      fifo(refStr,f,no_of_pages.value,i);
}

function fifo(refStr,f,no,i)
{
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(https://imgs.search.brave.com/AKgSHlU2liuWqFSL6Hr52e2KHzIarYu9iaajAcQNWSo/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIxNTI4/NjcuanBn)';
    pageFaults = 0;
    document.write("The reference string is : ");
    for(var k=0;k<no;k++)
    {
        document.write(refStr[k]+"&emsp;&emsp;");
    }
    document.write("<br><br>")
    var temp = [] 
    for(var m=0; m<parseInt(f); m++)
    {
        temp[m] = -1;
    }
    for(p=0;p<parseInt(f);p++)
    {
         document.write("f"+(p+1)+"&emsp;&emsp;&emsp;&emsp;");
    }
    document.write("<br>");
    for(m=0; m<parseInt(no); m++)
    {
    s = 0;
    for(n=0; n<parseInt(f); n++)
    {
        if(refStr[m] == temp[n]) 
        {
            s++;
            pageFaults--;        
        } 
    } 
    pageFaults++;
    if((pageFaults <= parseInt(f)) && (s == 0))
    {
        temp[m] = refStr[m];
    }
    else if(s == 0)
    {
        temp[(pageFaults - 1)%parseInt(f)] = refStr[m];
    }
    document.write("<br>");
    for(n = 0; n<parseInt(f); n++)
    {
        if(temp[n] != -1)
        {
          document.write(temp[n]+"&emsp;&emsp;&emsp;&emsp;")
        } 
        else
        {
          document.write(" - "+"&emsp;&emsp;&emsp;&emsp;")
        }
    }
     document.write("<br>"+"----------------------------------------------------");
    }
    document.write("<br><br><br>"+"Total page faults = "+pageFaults);
}




