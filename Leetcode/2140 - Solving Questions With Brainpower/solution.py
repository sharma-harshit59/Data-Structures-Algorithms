class Solution(object):
    def mostPoints(self, questions):
        memoized_calculations = {}
    
        def calc_max_points(index):
            if index >= len(questions):
                memoized_calculations[index] = 0
                return 0
            
            if index not in memoized_calculations:
                points, brainpower = questions[index]
                points_if_solved = points + calc_max_points(index + brainpower + 1)
                points_if_not_solved = calc_max_points(index + 1)
                memoized_calculations[index] = max(points_if_solved, points_if_not_solved)
            
            return memoized_calculations[index]
        
        return calc_max_points(0)
        