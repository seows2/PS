import java.util.Arrays;

class Hash2 {
    public boolean solution(String[] phone_book) {
        Arrays.sort(phone_book);
        for (int i = 0; i < phone_book.length-1; i++) {
            if(phone_book[i+1].startsWith(phone_book[i])){
                return false;
            }
        }
        return true;
    }

    // The following is main method to output testcase.
    public static void main(String[] args) {
        Hash2 sol = new Hash2();
        String[] phone_book =  {"12","123","1235","567","88"};
        boolean ret = sol.solution(phone_book);

        // Press Run button to receive output. 
        System.out.println("result " + ret);
    }
}