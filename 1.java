import java.util.*;

class Employee {
    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println(id + " " + name + " " + salary);
    }
}

public class Main {
    public static void main(String[] args) {
        List<Employee> List = new ArrayList<>();
        List.add(new Employee(101, "Rahul", 75000));
        List.add(new Employee(102, "Priya", 82000));
        List.add(new Employee(103, "Amit", 68000));

        for (Employee em : List) {
            em.displayDetails();
        }
    }
}
