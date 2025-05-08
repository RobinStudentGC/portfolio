import random

def create_board(width, height, num_mines):
    # Create an empty board
    board = [[0 for _ in range(width)] for _ in range(height)]
    
    # Place mines randomly
    mines = set()
    while len(mines) < num_mines:
        x = random.randint(0, width - 1)
        y = random.randint(0, height - 1)
        if (x, y) not in mines:
            mines.add((x, y))
            board[y][x] = 'M'
    
    # Calculate numbers for adjacent mines
    for (x, y) in mines:
        for dx in [-1, 0, 1]:
            for dy in [-1, 0, 1]:
                if dx == 0 and dy == 0:
                    continue
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and board[ny][nx] != 'M':
                    board[ny][nx] += 1
    
    return board

def print_board(board, revealed):
    for y in range(len(board)):
        row = []
        for x in range(len(board[y])):
            if revealed[y][x]:
                row.append(str(board[y][x]))
            else:
                row.append('#')
        print(' '.join(row))

def reveal_cell(board, revealed, x, y):
    if revealed[y][x]:
        return
    revealed[y][x] = True
    if board[y][x] == 0:
        for dx in [-1, 0, 1]:
            for dy in [-1, 0, 1]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < len(board[0]) and 0 <= ny < len(board):
                    reveal_cell(board, revealed, nx, ny)

def play_minesweeper(width, height, num_mines):
    board = create_board(width, height, num_mines)
    revealed = [[False for _ in range(width)] for _ in range(height)]
    
    while True:
        print_board(board, revealed)
        try:
            x = int(input("Enter x coordinate: "))
            y = int(input("Enter y coordinate: "))
            if x < 0 or x >= width or y < 0 or y >= height:
                print("Invalid coordinates. Try again.")
                continue
            if board[y][x] == 'M':
                print("BOOM! You hit a mine. Game over!")
                print_board(board, [[True for _ in range(width)] for _ in range(height)])
                break
            reveal_cell(board, revealed, x, y)
            if all(all(revealed[y][x] or board[y][x] == 'M' for x in range(width)) for y in range(height)):
                print("Congratulations! You cleared the board!")
                break
        except ValueError:
            print("Invalid input. Please enter numbers only.")

# Start the game
play_minesweeper(8, 8, 10)