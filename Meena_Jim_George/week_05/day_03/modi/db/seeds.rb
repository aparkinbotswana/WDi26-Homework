
Director.destroy_all
Director.create(:name => 'Francis Ford Coppola',:nationality => 'Australian',:dob => '1879-02-22',:moviecount => '20th century',:image => 'https://ia.media-imdb.com/images/M/MV5BMTM5NDU3OTgyNV5BMl5BanBnXkFtZTcwMzQxODA0NA@@._V1_SY1000_CR0,0,665,1000_AL_.jpg')
Director.create(:name => 'Brett Ratner', :nationality => 'Australian', :dob => '1912-02-07', :moviecount => '20th century', :image => 'https://ia.media-imdb.com/images/M/MV5BMTMyNDQ1MTQ0NV5BMl5BanBnXkFtZTcwNDg2Njg4Mw@@._V1_.jpg')
Director.create(:name => 'James Cameron', :nationality => 'Australian', :dob => '1915-11-21', :moviecount => '20th century', :image => 'https://ia.media-imdb.com/images/M/MV5BMjI0MjMzOTg2MF5BMl5BanBnXkFtZTcwMTM3NjQxMw@@._V1_.jpg')

Movie.destroy_all
Movie.create(:title => 'Avatar', :year => '2009', :genre => 'Sci-Fi', :duration => 'Romantic', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145', :director_id => '3')
Movie.create(:title => 'Rush Hour', :year => '1998', :genre => 'Action/Comedy', :duration => 'Sun-burnt dinge', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=5520', :director_id => '2')
Movie.create(:title => 'Apocalypse Now', :year => '1979', :genre => 'Drama', :duration => 'Surrealist', :image => 'https://content.ngv.vic.gov.au/col-images/api/EPUB001055/1280', :director_id => '1')
Movie.create(:title => 'The Godfather', :year => '1972', :genre => 'Drama', :duration => 'Sun-burnt splendour', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=57510', :director_id => '1')
