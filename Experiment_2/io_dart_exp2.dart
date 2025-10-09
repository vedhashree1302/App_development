import 'dart:io';

void main() {
  // --- Input and Output ---
  stdout.write("Enter your name: ");
  String? name = stdin.readLineSync();
  print("Hello, $name! Welcome to Dart programming.\n");

  // --- For Loop ---
  print("For Loop Example:");
  for (int i = 1; i <= 5; i++) {
    print("Count: $i");
  }

  // --- While Loop ---
  print("\nWhile Loop Example:");
  int count = 1;
  while (count <= 5) {
    print("Number: $count");
    count++;
  }

  // --- Do-While Loop ---
  print("\nDo-While Loop Example:");
  int num = 1;
  do {
    print("Value: $num");
    num++;
  } while (num <= 5);

  // --- For-in Loop ---
  print("\nFor-in Loop Example:");
  List<String> fruits = ["Apple", "Banana", "Cherry"];
  for (String fruit in fruits) {
    print("Fruit: $fruit");
  }

  print("\nProgram completed successfully!");
}