$(document).ready(function(){
	$('#result').hide();
	$('#search').click(function(){
		
		getAllData();
	})
	
	$('#reset').click(function(){
		resetAllData();
	})
});

 function getAllData(){
	$.ajax({
		type:'get',
		datatype:'json',
		url:'https://www.omdbapi.com/?i=tt3896198&apikey=3e6ab39a',
		success:function(data){
			
			for(i in data){
				if($('#title').val()==data.Title || $('#movieId').val()==data.imdbID || $('#year').val()==data.Year)
				{
					if($('#movieId').val()=="" && $('#year').val()=="" && $('#title').val()==data.Title) //id=empty, year=empty, title=correct;
					{
					
					getMovieData(data);
					break;
					}
					
					else if($('#movieId').val()==data.imdbID && $('#year').val()=="" && $('#title').val()=="") //id=correct, year=empty, title=empty;
					{
					getMovieData(data);
					break;
					}
					
					else if($('#year').val()==data.Year && $('#movieId').val()=="" && $('#title').val()=="")//year=correct, id=empty, title=empty;
					{
					getMovieData(data);
					break;
					}
					
					else if($('#title').val()==data.Title && $('#movieId').val()==data.imdbID && $('#year').val()=="")//title=correct, id=correct, year=empty;
					{
					getMovieData(data);
					break;
					}
					
					else if($('#title').val()=="" && $('#movieId').val()==data.imdbID && $('#year').val()==data.Year)//title=empty, id=correct, year=correct;
					{
					getMovieData(data);
					break;
					}
					
					else if($('#title').val()==data.Title && $('#movieId').val()=="" && $('#year').val()==data.Year)//title=correct, id=empty, year=correct;
					{
					getMovieData(data);
					break;
					}
					
					else if($('#title').val()==data.Title && $('#movieId').val()==data.imdbID && $('#year').val()==data.Year)//all correct;
					{
					getMovieData(data);
					break;
					}
					
					else if($('#title').val()!=data.Title && $('#movieId').val()=="" && $('#year').val()=="")//title=incorrect, id=empty, year=empty;
					{
						$('#result').hide();
					alert("Wrong Title");
					break;
					}
					
					else if($('#movieId').val()!=data.imdbID && $('#title').val()=="" && $('#year').val()=="")//id=incorrect, title=empty, year=empty;
					{
						$('#result').hide();
						alert("Wrong ID");
						break;
					}
					
					else if($('#year').val()!=data.Year && $('#movieId').val()=="" && $('#title').val()=="")//year=incorrect, id=empty, title=empty;
					{
						$('#result').hide();
					alert("Wrong year");
					break;
					}
					
					else if($('#title').val()==data.Title && $('#movieId').val()!=data.imdbID && $('#year').val()!=data.Year)//title=correct, id=incorrect, year=incorrect;
					{
						$('#result').hide();
						alert("Wrong ID and year");
						break;
					}
					
					else if($('#movieId').val()==data.imdbID && $('#title').val()!=data.Title && $('#year').val()!=data.Year)//id=correct, title=incorrect, year=incorrect;
					{
						$('#result').hide();
							alert("Wrong Title and Year");
						break;
					}
					
					else if($('#year').val()==data.Year && $('#title').val()!=data.Title && $('#moiveId').val()!=data.imdbID)//year=correct, title=incorrect, id=incorrect;
					{
						$('#result').hide();
							alert("Wrong ID and title");
						break;
					}
					
					else if($('#title').val()!=data.Title && $('#movieId').val()==data.imdbID && $('#year').val()==data.Year)//title=incorrect, id=correct, year=correct;
					{
						$('#result').hide();
						alert("Wrong Title");
						break;
					}
					
					else if($('#movieId').val()!=data.imdbID && $('#title').val()==data.Title && $('#year').val()==data.Year)//id=incorrect, title=correct, year=correct;
					{
						$('#result').hide();
							alert("Wrong ID");
						break;
					}
					
					else if($('#year').val()!=data.Year && $('#title').val()==data.Title && $('#movieId').val()==data.imdbID)//year=incorrect, title=correct, id=correct;
					{
						$('#result').hide();
						alert("Wrong Year");
						break;
					}
							
				}
				
				else if($('#title').val()!=data.Title && $('#movieId').val()=="" && $('#year').val()=="")//title=incorrect, id=empty, year=empty;
					{
						$('#result').hide();
						alert("Wrong Title");
						break;
					}
					
					else if($('#movieId').val()!=data.imdbID && $('#title').val()=="" && $('#year').val()=="")//id=incorrect, title=empty, year=empty;
					{
						$('#result').hide();
							alert("Wrong ID");
						break;
					}
					
					else if($('#year').val()!=data.Year && $('#title').val()=="" && $('#movieId').val()=="")//year=incorrect, title=empty, id=empty;
					{
						$('#result').hide();
						alert("Wrong Year");
						break;
					}			
				else{
					$('#result').hide();
				alert("Wrong data");
				break;
				}
			}
			
		},
		
		error:(data1)=>{
			alert("error");
		},
		
		timeout:3000
	})
}

function getMovieData(data){
	$('#result').show();
	let imgUrl = data.Poster;
	/* $('#result').prepend($('img').attr({'src':imgUrl,'style':'border:solid white','width':'200px','height':'200px'})); */
	$('#result > #img1').html('<img src="' + imgUrl + '" style="border:solid white;width:200px;height:200px">');
	/* $('img').after('<br/><br/>'); */
	$('#title1').append($('#title2').text(data.Title));
	
	$('#id1').append($('#id2').text(data.imdbID));
	$('#year1').append($('#year2').text(data.Year));	
	$('#rated').append($('#rated1').text(data.Rated));
	
	$('#released').append($('#released1').text(data.Released));
	$('#runtime').append($('#runtime1').text(data.Runtime));	
	$('#genre').append($('#genre').text(data.Genre));
	
	$('#director').append($('#director1').text(data.Director));
	$('#writer').append($('#writer1').text(data.Writer));
	$('#actors').append($('#actors1').text(data.Actors));	
	
	$('#plot').append($('#plot1').text(data.Plot));
	$('#language').append($('#language1').text(data.Language));
	$('#country').append($('#country1').text(data.Country));
	$('#awards').append($('#awards1').text(data.Awards));
	
	for(i in data.Ratings)
	{
		$('#subRatings').append('<br/>');
		$('#subRatings').append('Source: ' + data.Ratings[i].Source);
		$('#subRatings').append('<br/>');
		$('#subRatings').append('Value: ' + data.Ratings[i].Value);
	}
	
	$('#metascore').append($('#metascore1').text(data.Metascore));
	$('#imdbrating').append($('#imdbRating1').text(data.imdbRating));
	$('#imdbvotes').append($('#imdbVotes1').text(data.imdbVotes));
	
	$('#type').append($('#type1').text(data.Type));
	$('#dvd').append($('#dvd1').text(data.DVD));	
	$('#boxoffice').append($('#boxoffice1').text(data.BoxOffice));
	
	$('#production').append($('#production1').text(data.Production));
	$('#website').append($('#website1').text(data.Website));
	$('#response').append($('#response1').text(data.Response));
	
}

function resetAllData(){
	$('#title').val("");
	$('#movieId').val("");
	$('#year').val("");
}