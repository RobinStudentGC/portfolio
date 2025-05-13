import os

def main():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(current_dir, 'all_files_data.txt')
    names_file = os.path.join(current_dir, 'file_names.txt')

    file_names = []

    with open(output_file, 'w', encoding='utf-8') as out_f:
        for filename in os.listdir(current_dir):
            file_path = os.path.join(current_dir, filename)
            if os.path.isfile(file_path) and filename != os.path.basename(__file__):
                file_names.append(filename)
                out_f.write(f'--- {filename} ---\n')
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as in_f:
                        out_f.write(in_f.read())
                except Exception as e:
                    out_f.write(f'[Could not read file: {e}]\n')
                out_f.write('\n\n')

    # Write the filenames to a separate file
    with open(names_file, 'w', encoding='utf-8') as names_f:
        for name in file_names:
            names_f.write(name + '\n')

if __name__ == '__main__':
    main()