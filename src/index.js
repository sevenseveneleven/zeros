module.exports = function getZerosCount(number) {
	
	let zeros = 0;
	
	function numberOfTwos (num) {
		
		let result = 0;
		
		while (num % 2 == 0) {
			num /= 2;
			result += 1;
		}
		
		return result;
	
	}
  
	function numberOfFives (num) {
		
		let result = 0;
		
		while (num % 5 == 0) {
			num /= 5;
			result += 1;
		}
		
		return result;
	
	}
	
	let overallNumberOfTwos = 0;
	let overallNumberOfFives = 0;
	
	for (i = 2; i <= number; i++)	{
	
		overallNumberOfTwos += numberOfTwos (i);
		overallNumberOfFives += numberOfFives (i);
	
	}
	
	if (overallNumberOfTwos !=0 && overallNumberOfFives != 0)	{
		
		if (overallNumberOfFives > overallNumberOfTwos)	{
			
			zeros = overallNumberOfTwos;
	
		}	else {
				zeros = overallNumberOfFives;
			}
		
	}
		
	return zeros;	
}
