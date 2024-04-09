const solution = (my_string) => 
    my_string.replace(/[^0-9]/g, "")
    .split("")
    .map(el => +el)
    .sort((a, b) => a - b);
