var problems = document.querySelectorAll('.btnp');
var problem = document.querySelectorAll('.btnpp');
for(let i=0;i<problems.length;i++)
{
	problems[i].addEventListener('click',showCode);
}

function showCode(e){
	for(let i=0;i<problems.length;i++)
	{
		if(e.target == problems[i])
		{
			if (problem[i].style.display === 'none') {
	          problem[i].style.display = 'block';
	      } else {
	          problem[i].style.display = 'none';
	      }
		}
	}
}