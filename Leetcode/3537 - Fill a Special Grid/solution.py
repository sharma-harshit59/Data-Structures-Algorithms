class Solution:
    def specialGrid(self, n: int) -> List[List[int]]:
        max_dimension = 1 << n
        grid = [[-1 for _ in range(max_dimension)] for _ in range(max_dimension)]

        counter, head = (0, 0)
        queue = [{ "x": 0, "y": max_dimension - 1, "max_step": max_dimension }]

        while (head < len(queue)):
            x = queue[head]['x']
            y = queue[head]['y']
            max_step = queue[head]['max_step']
            head += 1
            xi = x
            yi = y

            if (max_step == 1):
                grid[xi][yi] = counter
                counter += 1
            else:
                half = (max_step // 2)
                queue.append({ "x": x, "y": y, "max_step": half })  # Top-Right
                x += half
                queue.append({ "x": x, "y": y, "max_step": half })  # Bottom-Right
                y -= half
                queue.append({ "x": x, "y": y, "max_step": half })  # Bottom-Left
                x -= half
                queue.append({ "x": x, "y": y, "max_step": half })  # Top-Left

        return grid 