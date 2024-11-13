const codeBox = document.querySelector('.codeBox');
const code = document.querySelector('#code');

code.addEventListener("change", () => {
    codeBox.innerHTML = '';
    console.log('Changed');
    const selectedValue = code.value;
    switch (selectedValue) {
        case '1': 
            codeBox.innerHTML = `
#include &lt;stdio.h&gt;

void add(float a, float b) {
    printf("Result: %.2f\\n", a + b);
}

void subtract(float a, float b) {
    printf("Result: %.2f\\n", a - b);
}

void multiply(float a, float b) {
    printf("Result: %.2f\\n", a * b);
}

void divide(float a, float b) {
    if (b == 0) {
        printf("Error: Division by zero is not allowed.\\n");
    } else {
        printf("Result: %.2f\\n", a / b);
    }
}

int main() {
    int choice;
    float num1, num2;

    while (1) {
        printf("\\nSelect operation:\\n");
        printf("1. Add\\n");
        printf("2. Subtract\\n");
        printf("3. Multiply\\n");
        printf("4. Divide\\n");
        printf("5. Exit\\n");
        printf("Enter choice (1/2/3/4/5): ");
        scanf("%d", &choice);

        if (choice == 5) {
            printf("Exiting the calculator. Goodbye!\\n");
            break;
        }

        printf("Enter first number: ");
        scanf("%f", &num1);
        printf("Enter second number: ");
        scanf("%f", &num2);

        switch (choice) {
            case 1:
                add(num1, num2);
                break;
            case 2:
                subtract(num1, num2);
                break;
            case 3:
                multiply(num1, num2);
                break;
            case 4:
                divide(num1, num2);
                break;
            default:
                printf("Invalid operation.\\n");
        }
    }

    return 0;
}
            `;
            break;

        case '2': // Fibonacci Series Code
            codeBox.innerHTML = `
#include &lt;stdio.h&gt;

void fibonacci(int terms) {
    int t1 = 0, t2 = 1, nextTerm;
    
    printf("Fibonacci Series: %d, %d", t1, t2);
    for (int i = 3; i <= terms; ++i) {
        nextTerm = t1 + t2;
        printf(", %d", nextTerm);
        t1 = t2;
        t2 = nextTerm;
    }
    printf("\\n");
}

int main() {
    int terms;
    
    printf("Enter the number of terms: ");
    scanf("%d", &terms);
    
    if (terms < 1) {
        printf("Please enter a positive integer.\\n");
    } else if (terms == 1) {
        printf("Fibonacci Series: 0\\n");
    } else {
        fibonacci(terms);
    }
    
    return 0;
}
            `;
            break;

        case '3': // Banking System Code
            codeBox.innerHTML = `
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

#define MAX_ACCOUNTS 100

struct Account {
    char name[50];
    float balance;
};

void addAccount(struct Account accounts[], int *count) {
    if (*count < MAX_ACCOUNTS) {
        printf("Enter account holder name: ");
        scanf(" %[^\n]%*c", accounts[*count].name); // Reads a full line including spaces
        printf("Enter initial balance: ");
        scanf("%f", &accounts[*count].balance);
        (*count)++;
        printf("Account added successfully.\\n");
    } else {
        printf("Maximum number of accounts reached.\\n");
    }
}

void displayAccounts(struct Account accounts[], int count) {
    printf("\\nAccount Holder List:\\n");
    for (int i = 0; i < count; i++) {
        printf("Name: %s, Balance: %.2f\\n", accounts[i].name, accounts[i].balance);
    }
}

int main() {
    struct Account accounts[MAX_ACCOUNTS];
    int count = 0;
    int choice;
    
    while (1) {
        printf("\\n1. Add Account\\n2. Display Accounts\\n3. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch (choice) {
            case 1:
                addAccount(accounts, &count);
                break;
            case 2:
                displayAccounts(accounts, count);
                break;
            case 3:
                printf("Exiting the program.\\n");
                return 0;
            default:
                printf("Invalid choice. Please try again.\\n");
        }
    }
    
    return 0;
}
            `;
            break;

        default:
            codeBox.innerHTML = 'Please select a valid code option.';
    }
});

const file = document.querySelector('.file');
file.addEventListene                                                                                                                                                    
