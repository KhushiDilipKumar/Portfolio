function fifo()
{
pageFaults = 0;
var no_of_pages = document.getElementById("noOfpage");
window.alert("Enter reference string values");
var refStr = []
for(var i=0; i< no_of_pages.value; i++)
{
  refStr[i] = window.prompt("Enter Value no. ["+(i+1)+"]");
}

f = window.prompt("Enter the no. of frames");
var temp = []
for(var m=0; m<f; m++)
{
    temp[m] = -1;
}
for(p=0;p<f;p++)
  {
      document.write("f"+(p+1)+"&emsp;&emsp;&emsp;&emsp;");
  }
document.write("<br>");
for(m=0; m<no_of_pages.value; m++)
{
  s = 0;
  for(n=0; n<f; n++)
  {
      if(refStr[i] == temp[n])
      {
          s++;
          pageFaults--;
      }
  }
  pageFaults++;
  if((pageFaults <= f) && (s == 0))
  {
    temp[m] = refStr[m];
  }
  else if(s == 0)
  {
      temp[(pageFaults - 1)%f] = refStr[m];
  }
  document.write("<br>");
  for(n = 0; n<f; n++)
  {
      document.write(temp[n]+"&emsp;&emsp;&emsp;&emsp;")
  }
  document.write("<br>"+"----------------------------------------------------");
}
document.write("<br><br><br>"+"Total page faults = "+pageFaults);
}
