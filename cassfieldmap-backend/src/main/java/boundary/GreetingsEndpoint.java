package boundary;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingsEndpoint {

    @RequestMapping("/greeting")
    public String greeting() {
        return "Hello my friend!";
    }
}