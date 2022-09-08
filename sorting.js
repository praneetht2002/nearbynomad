function getUserInputAsIntArray()
{
    const userInput =  prompt("Enter the comma seperated values")
    splited_str = userInput.split(",")
    console.log(splited_str)
    int_arr = []
   splited_str.forEach(
       element => int_arr.push(
           parseInt(element.replace(" ", ))
           )
       )
   return int_arr
}

function swap(arr,x,y){
    [arr[x],arr[y]] = [arr[y],arr[x]]

    return arr
}
//xxxxxxxxxxxxxxxxxxxxxxxxxx MERGE SORT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/*function mergeTheTwoArrays(array1, array2)
{
    var i = 0
    var j = 0
    var k = 0
    const newArray = []

    while ( i < array1.length && j < array2.length)
    {

        if(array1[i] < array2[j])
        {
            newArray[k] = array1[i]
            i = i + 1
        }
        else{
            newArray[k] = array2[j]
            j = j + 1
        }
        k = k + 1
    }

    if(i < array1.length)
    {
        newArray.concat(array1.slice(i, array1.length))
    }
    else{
        newArray.concat(array2.slice(j, array2.length))
    }

    return newArray
}*/

function improvedMerge(left, right)
{
    const newArray = []

    while(left.length && right.length)
    {
        if(left[0] < right[0])
        {
            newArray.push(left.shift())
        }
        else{
            newArray.push(right.shift())
        }
    }
    return newArray.concat(left).concat(right)
}
function mergeSort(arr)
{
    if(arr.length < 2)
    {
        return arr
    }
    
    const half_len = arr.length / 2
    const left_array = arr.slice(0, half_len)
    const right_array  = arr.slice(half_len, arr.length)

    return improvedMerge ( mergeSort(left_array), mergeSort(right_array) )
}
document.getElementById("merge").addEventListener('click', ()=>{
    
   const array = getUserInputAsIntArray()

   //const array_a = [2]//, 5, 9, 10]

   //const array_b = getUserInputAsIntArray()

   //const array_b = [4]//, 9, 11]

   console.log(array)
   //console.log(array_b)

   const newArray = mergeSort(array)

   console.log(newArray)

   alert("The Sorted array is: " + newArray)

})

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx BUBBLE SORT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function bubbleSort(arr){
    for(let i=0; i<(arr.length-1) ; i++){
        for(let j=0; j<(arr.length-1-i); j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}
document.getElementById("bubble").addEventListener('click', ()=>{
    
    const array = getUserInputAsIntArray()
 
    console.log(array)
 
    const newArray = bubbleSort(array)
 
    console.log(newArray)
 
    alert("The Sorted array is: " + newArray)
 
 })

 //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx INSERTION SORT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 function insertionSort(arr){
    var x;

    for(let i=0; i<arr.length;i++){
        x = i-1;
        let tmp = arr[i]
       
        while(x>=0 && tmp < arr[x]){
            arr[x+1] = arr[x]
            x--
        }
        arr[x+1] = tmp
        
    }
    return arr
}
 document.getElementById("insert").addEventListener('click', ()=>{
    
    const array = getUserInputAsIntArray()
 
    console.log(array)
 
    const newArray = insertionSort(array)
 
    console.log(newArray)
 
    alert("The Sorted array is: " + newArray)
 
 })

 //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx SELECTION SORT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 function selectionSort(arr){
    var tmp 
    for(let i=0;i<arr.length-1; i++){
        tmp = i 
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[tmp])
                tmp = j
         }
         swap(arr,tmp,i)
     }
     return arr
 }
 document.getElementById("select").addEventListener('click', ()=>{
    
    const array = getUserInputAsIntArray()
 
    console.log(array)
 
    const newArray = selectionSort(array)
 
    console.log(newArray)
 
    alert("The Sorted array is: " + newArray)
 
 })

 //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx QUICK SORT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 function partition(arr,l,h){
    let pivot = arr[l]
    let i = l
    let j = h

    while(i<=j){
        while(arr[i]<=pivot && i<arr.length){
            i++
        }
        while(arr[j]>pivot && j>=0){
            j--
        }
        if(i<j){
            swap(arr,i,j)
        }
    }
    swap(arr,j,l)

    return j
}
 function quickSort(arr,l,h){
    if(l<h){
        let p = partition(arr,l,h)

        quickSort(arr,l,p-1)
        quickSort(arr,p+1,h) 
    }
    return arr
}
 document.getElementById("quick").addEventListener('click', ()=>{
    
    const array = getUserInputAsIntArray()
 
    console.log(array)
 
    const newArray = quickSort(array,0,array.length-1)
 
    console.log(newArray)
 
    alert("The Sorted array is: " + newArray)
 
 })

 //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx HEAP SORT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 function heapify(arr,n,i){
     let largest = i
     let lc = 2*i+1
     let rc = 2*i+2

     if(arr[lc]>arr[largest] && lc<n){
         largest = lc
     }
     if(arr[rc]>arr[largest] && rc<n){
         largest = rc
     }

     if(largest!=i){
         swap(arr,i,largest)
         heapify(arr,n,largest)
     }
 }
 function heapSort(arr){
    
    for(let i=(arr.length/2)-1; i>=0; i--){
        heapify(arr,arr.length,i)
    }

    for(let i=(arr.length-1); i>=0; i--){
        swap(arr,i,0)
        heapify(arr,i,0)
    }

    return arr
 }
 document.getElementById("heap").addEventListener('click', ()=>{
    
    const array = getUserInputAsIntArray()
 
    console.log(array)
 
    const newArray = heapSort(array,0,array.length-1)
 
    console.log(newArray)
 
    alert("The Sorted array is: " + newArray)
 
 })