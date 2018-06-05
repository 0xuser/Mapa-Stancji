package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.boundary.delegate.FileUploadDelegate;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.inject.Inject;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/files")
public class FileUploadController {

    @Inject
    private FileUploadDelegate fileUploadDelegate;

    //TODO: return full links to images stored on ftp server
    @GetMapping("/list/{userId}/{classifiedId}")
    public ResponseEntity listUploadedFilesForGivenClassified(@PathVariable("userId") String userId,
                                                              @PathVariable("classifiedId") String classifiedId) {
        List<String> fileList = fileUploadDelegate.listUploadedFilesForGivenClassified(userId, classifiedId);
        return ResponseEntity.status(HttpStatus.OK).body(fileList);
    }

    //TODO return image in http request probably optional ( low priority )
    @GetMapping("/{userId}/{classifiedId}/{filename}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable("filename") String filename,
                                              @PathVariable("userId") String userId,
                                              @PathVariable("classifiedId") String classifiedId) {

        Resource file = fileUploadDelegate.getImageAsResource(userId, classifiedId, filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    //TODO save image from http post request
    @PostMapping("/{userId}/{classifiedId}")
    public ResponseEntity handleFileUpload(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes,
                                   @PathVariable("userId") String userId, @PathVariable("classifiedId") String classifiedId) {
        fileUploadDelegate.saveImage(file, userId, classifiedId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
