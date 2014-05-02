'use strict';

var sortItAll = function () { 
	var listOfSelects = document.getElementsByTagName('select');
	for(var i=0; i<listOfSelects.length; i++ )
	{
		if(listOfSelects[i].parentNode.id.indexOf('milestoneListPanel') > 0)
		{
			var selectedIndex = listOfSelects[i].selectedIndex;
			if(selectedIndex > 0)
			{
				var selectedVal = listOfSelects[i].options[selectedIndex].value;
			}
			
			sortOptions(listOfSelects[i]);
			
			if(selectedIndex > 0)
			{
				if(listOfSelects[i].options.length)
				{
					for(var j = 0; j< listOfSelects[i].options.length; j++)
					{
						if(listOfSelects[i].options[j].value == selectedVal)
							selectedIndex = j;
					}
					listOfSelects[i].selectedIndex = selectedIndex;
				}
			}
		}
	}
	function sortOptions(list) {
		var items = list.options.length;
		var tmpArray = new Array(items);
		for (var i=0; i<items; i++ )
		{
			tmpArray[i] = new Option(list.options[i].text,list.options[i].value);
		}
		
		tmpArray.sort(function (a,b) {
			return a.text!=b.text ? a.text<b.text ? -1 : 1 : 0;
		});
		
		for (var i=0; i<items; i++ )
			list.options[i] = new Option(tmpArray[i].text,tmpArray[i].value);
	}
};