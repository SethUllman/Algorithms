def min_number_of_semesters(n, dependencies, k)
  #loop through dependencies
  #create hash where key is the course and values are dependencies
  #iterate through courses n, taking classes without dependencies until enrolled == k or there are no more available classes without depenencies
  #increment semesters until finished
  #return semesters
    
  semesters = 0
  courses = Hash.new()
  courses_enrolled = []
  
  dependencies.each do |prereq|
    courses[(prereq[0])] = (prereq[1])
  end
  print('one end')
  
  until courses.keys.length == 0 do
    n.times do |course|
      take = true
      is_prereq = []
          
      courses.each do |key, value|
        take = false if value == course
      end
      print('second end')
          
      if courses_enrolled.length < k
        courses_enrolled << course
        courses.delete(:n) if take
      end
      print('third end')
    end  
    print('fourth end')
    semesters++    
  end
  print('fifth end')
  semesters
end

min_number_of_semesters(4, [[2,1],[3,1],[1,4]], 2)