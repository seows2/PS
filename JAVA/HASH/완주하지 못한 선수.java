import java.util.Arrays;

class Hash1 {
    public String solution(String[] participant, String[] completion) {
        Arrays.sort(participant);
        Arrays.sort(completion);
        int i;
        for (i = 0; i < completion.length; i++) {
            if(!participant[i].equals(completion[i])){
                return participant[i];
            }
        }
        return participant[i];
    }

    // The following is main method to output testcase.
    public static void main(String[] args) {
        Hash1 sol = new Hash1();
        String[] participant =  {"leo", "kiki", "eden"};
        String[] completion =  {"eden", "kiki"};
        String ret = sol.solution(participant, completion);

        // Press Run button to receive output. 
        System.out.println("result " + ret);
    }
}