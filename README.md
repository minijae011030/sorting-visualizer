# Sorting Visualizer

Sorting Visualizer는 다양한 정렬 알고리즘의 작동 방식을 실시간 그래프와 C 코드를 통해 시각적으로 보여주는 웹 애플리케이션입니다.

사용자는 배열의 크기를 조절하며 각 정렬 알고리즘을 직관적으로 이해할 수 있으며, 알고리즘의 C 코드도 함께 확인할 수 있습니다.

## 주요 기능

1.  정렬 알고리즘 선택

    • 다음 정렬 알고리즘을 지원

         선택 정렬 (Selection Sort)

         삽입 정렬 (Insertion Sort)

         퀵 정렬 (Quick Sort)

         힙 정렬 (Heap Sort)

         기수 정렬 (Radix Sort)

         셸 정렬 (Shell Sort)

2.  실시간 시각화

    • 정렬 과정이 막대 그래프로 시각화되며, 데이터의 크기에 따라 막대의 높이가 다르게 표현됩니다.

    • 사용자는 정렬 과정의 각 단계를 눈으로 확인할 수 있습니다.

    • 각 정렬 알고리즘 마다 그래프가 정렬된 시간을 확인할 수 있습니다.

3.  배열 크기 조절

    • 배열 크기를 조절하여 소규모 또는 대규모 데이터에서 알고리즘의 작동 방식을 확인할 수 있습니다.

4.  C 코드 보기

    • 선택한 정렬 알고리즘의 C 코드를 애플리케이션 내에서 확인할 수 있습니다.

    • 알고리즘의 동작과 코드 구현을 함께 학습할 수 있는 학습 도구로 활용 가능합니다.

## 기술 스택

    React, TypeScript

# 사용 방법

<img src="https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/sorting_1.png?alt=media&token=6cb19fb6-6fa8-46ca-af42-657cca8cdad0">

<img src="https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/sorting_2.png?alt=media&token=a8591244-06ba-4f56-910c-4871bbe89c4a">

<img src="https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/sorting_3.png?alt=media&token=7fa25559-4b1b-4363-ae70-404bf6752899">

1. 배열 크기 설정

   • 애플리케이션에서 배열 크기를 설정합니다.

2. 정렬 알고리즘 선택

   • 원하는 정렬 알고리즘을 선택합니다.

3. 정렬 시각화

   • 정렬 과정을 실시간으로 확인합니다.

4. C 코드 확인

   • 선택한 알고리즘의 C 코드를 확인하며 학습할 수 있습니다.

## 지원하는 정렬 알고리즘

1. 선택 정렬 (Selection Sort)

   ```c
   void selectionSort(int* arr, int arr_len) {
       for (int i = arr_len - 1; i > 0; i--) {
           int max_idx = i;
           for (int j = 0; j < i; j++) {
               if (arr[j] > arr[max_idx]) {
                   max_idx = j;
               }
           }
           if (max_idx != i) {
               int tmp = arr[i];
               arr[i] = arr[max_idx];
               arr[max_idx] = tmp;
           }
       }
   }
   ```

2. 삽입 정렬 (Insertion Sort)

   ```c
   void insertionSort(int* arr, int arr_len) {
       for (int i = 1; i < arr_len; i++) {
           int key = arr[i];
           int j = i - 1;
           while (j >= 0 && arr[j] > key) {
               arr[j + 1] = arr[j];
               j--;
           }
           arr[j + 1] = key;
       }
   }
   ```

3. 퀵 정렬 (Quick Sort)

   ```c
   int partition(int* arr, int low, int high) {
       int pivot = arr[high];
       int i = low - 1;
       for (int j = low; j < high; j++) {
           if (arr[j] < pivot) {
               i++;
               int temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
           }
       }
       int temp = arr[i + 1];
       arr[i + 1] = arr[high];
       arr[high] = temp;
       return i + 1;
   }

   void quickSort(int* arr, int low, int high) {
       if (low < high) {
           int pi = partition(arr, low, high);
           quickSort(arr, low, pi - 1);
           quickSort(arr, pi + 1, high);
       }
   }
   ```

4. 힙 정렬 (Heap Sort)

   ```c
   void heapify(int* arr, int n, int i) {
       int largest = i;
       int left = 2 * i + 1;
       int right = 2 * i + 2;

       if (left < n && arr[left] > arr[largest]) {
           largest = left;
       }

       if (right < n && arr[right] > arr[largest]) {
           largest = right;
       }

       if (largest != i) {
           int temp = arr[i];
           arr[i] = arr[largest];
           arr[largest] = temp;
           heapify(arr, n, largest);
       }
   }

   void heapSort(int* arr, int n) {
       for (int i = n / 2 - 1; i >= 0; i--) {
           heapify(arr, n, i);
       }
       for (int i = n - 1; i > 0; i--) {
           int temp = arr[0];
           arr[0] = arr[i];
           arr[i] = temp;
           heapify(arr, i, 0);
       }
   }
   ```

5. 기수 정렬 (Radix Sort)

   ```c
   int getMax(int* arr, int n) {
        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    void countSort(int* arr, int n, int exp) {
        int output[n];
        int count[10] = {0};

        for (int i = 0; i < n; i++) {
            count[(arr[i] / exp) % 10]++;
        }

        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (int i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }

        for (int i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }

    void radixSort(int* arr, int n) {
        int max = getMax(arr, n);
        for (int exp = 1; max / exp > 0; exp *= 10) {
            countSort(arr, n, exp);
        }
    }

   ```

6. 셸 정렬 (Shell Sort)

   ```c
   void shellSort(int* arr, int n) {
       for (int gap = n / 2; gap > 0; gap /= 2) {
           for (int i = gap; i < n; i++) {
               int temp = arr[i];
               int j;
               for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                   arr[j] = arr[j - gap];
               }
               arr[j] = temp;
           }
       }
   }
   ```
